import React from 'react';
import { PayoutTier } from '../data/leagueData';

interface PayoutCardProps {
  payout: PayoutTier;
}

const PayoutCard: React.FC<PayoutCardProps> = ({ payout }) => {
  return (
    <div className="card payout-card">
      <h4>{payout.stage}</h4>
      <p className="payout-amount">{payout.amount}</p>
      <p className="muted">{payout.notes}</p>
    </div>
  );
};

export default PayoutCard;
