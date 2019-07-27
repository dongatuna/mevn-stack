import taskRoutes from './api/tasks/tasks-routes'
import regRoutes from './api/register/register-routes'
import userRoutes from './api/user/user-routes'
import authRoutes from './api/auth/auth-routes'

//a new way to register routes
export function registerRoutes(app){
    app.use('/api', taskRoutes)
    app.use('/api', regRoutes)
    app.use('/api', userRoutes)
    app.use('/api', authRoutes)

}