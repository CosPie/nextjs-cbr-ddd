import { HealthyResponse } from '@/mocks/healthy/index';
import { lastValueFrom } from 'rxjs';
import { CloudServerAPI$, BaseAPI$ } from '../api';

it('test BaseAPI$ -> /healthy', async () => {
  const res = await lastValueFrom(
    BaseAPI$.get$<typeof HealthyResponse>('/healthy'),
  );
  expect(res?.hello).toBe(HealthyResponse.hello);
});
