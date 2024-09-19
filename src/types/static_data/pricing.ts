export interface SubscriptionPlan {
  _id: string;
  code: string;
  name: string;
  amount: Amount;
  mostPopular: boolean;
  description: string;
  features: PlanFeature[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Amount {
  NGN: number;
}

export interface PlanFeature {
  code: string;
  name: string;
  group: string;
  description: string;
  freeUnits: number;
  available: boolean;
  maxUnits: number;
  costPerUnit: Amount;
}
