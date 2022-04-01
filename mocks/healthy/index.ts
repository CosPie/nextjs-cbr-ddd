import { rest } from 'msw';

export const HealthyResponse = {
  hello: 'world',
};


export const HeathyCheckHandlers = [
  rest.get('/healthy', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(HealthyResponse));
  }),
];
