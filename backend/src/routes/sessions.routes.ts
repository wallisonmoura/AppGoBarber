import { Router } from 'express';

import AutheticateUserService from '../services/AutheticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const autheticateUser = new AutheticateUserService();

    const { user, token } = await autheticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return res.json({ user, token });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
