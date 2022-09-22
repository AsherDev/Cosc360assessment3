import mongoose from 'mongoose'

const connectDB = async () => {
    const dbUri = process.env.dbURI || ''
    console.log('[server]: Connecting to Database...')
    try {
        await mongoose.connect(dbUri)
    }
    catch (error) {
        console.log('[server]: Could not connect to Database')
        console.log(error)
        process.exit(1)
    }
}

export default connectDB