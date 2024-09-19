import { SubscriptionPlan } from '@/types/static_data/pricing';

export async function getPlans() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/billing/plans`,
      {
        method: 'get',
        redirect: 'follow',
      },
    );

    const data = await res.json();

    if (!data.length) throw new Error(JSON.stringify(data));

    return data as SubscriptionPlan[];
  } catch (e) {
    console.error('===>', e);

    return null;
  }
}
