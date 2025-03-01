import newDatabase from './database.js'

const isPersistent = false
const database = newDatabase({isPersistent})


export const register = async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' })
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

        const user = database.create({
            username,
            password: hashedPassword
        })

        res.status(201).json({
            id: user.id,
            username: user.username
        })

    } catch (error) {
        res.status(500).json({ message: 'Error registering user' })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' })
        }

        const users = Object.values(database).filter(user => user.username === username)
        const user = users[0]

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' })

        res.status(201).json({ token })

    } catch (error) {
        res.status(500).json({ message: 'Error logging in' })
    }
}

export const getProfile = async (req, res) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided' })
        }

        const token = authHeader.split(' ')[1]

        const decoded = jwt.verify(token, JWT_SECRET)
        
        const user = database.getById(decoded.userId)
        if (!user) {
            return res.status(401).json({ message: 'Invalid token' })
        }

        res.json({ message: user.username })

    } catch (error) {
        res.status(401).json({ message: 'Invalid token' })
    }
}

export const logout = async (req, res) => {
    res.status(204).send()
}