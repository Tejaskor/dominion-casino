import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import walletIcon from '@/assets/images/buy-coins/wallet-icon.svg';
import coinIcon from '@/assets/images/buy-coins/coin-icon.svg';
import chest10k from '@/assets/images/buy-coins/chest-10k.svg';
import chest30k from '@/assets/images/buy-coins/chest-30k.svg';
import chest50k from '@/assets/images/buy-coins/chest-50k.svg';
import chest100k from '@/assets/images/buy-coins/chest-100k.svg';
import chest200k from '@/assets/images/buy-coins/chest-200k.svg';
import chest300k from '@/assets/images/buy-coins/chest-300k.svg';
import chest500k from '@/assets/images/buy-coins/chest-500k.svg';
import chest1m from '@/assets/images/buy-coins/chest-1m.svg';
import chest3m from '@/assets/images/buy-coins/chest-3m.svg';

const BUNDLES = [
  { freeChips: '10', social: '10,000', price: '$9.99', chest: chest10k },
  { freeChips: '30', social: '30,000', price: '$29.99', chest: chest30k },
  { freeChips: '50', social: '50,000', price: '$49.99', chest: chest50k },
  { freeChips: '100', social: '100,000', price: '$99.99', chest: chest100k },
  { freeChips: '200', social: '200,000', price: '$199.99', chest: chest200k },
  { freeChips: '300', social: '300,000', price: '$299.99', chest: chest300k },
  { freeChips: '500', social: '500,000', price: '$499.99', chest: chest500k },
  { freeChips: '1,000', social: '1,000,000', price: '$999.99', chest: chest1m },
  { freeChips: '3,000', social: '3,000,000', price: '$2999.99', chest: chest3m },
];

function BundleCard({ bundle }) {
  return (
    <div className="rounded-[12px] border border-[#232325] bg-[#19191A] overflow-hidden flex flex-col">
      <div className="flex items-center gap-[14px] px-[10px] py-[10px] border-b border-[#232325]">
        <img
          src={coinIcon}
          alt=""
          className="h-[35px] w-[30px] shrink-0 select-none"
          draggable={false}
        />
        <div className="min-w-0 leading-tight">
          <div className="text-[16px] font-semibold text-white leading-none">{bundle.freeChips}</div>
          <div className="mt-1 text-[12px] text-[#939294] leading-none">Free D1 Chips</div>
        </div>
      </div>

      <div className="flex flex-col items-center p-[10px] flex-1">
        <div className="flex w-full flex-1 flex-col items-center justify-between rounded-[8px] py-3">
          <img
            src={bundle.chest}
            alt=""
            className="h-[74px] w-auto select-none"
            draggable={false}
          />
          <div className="mt-2 text-center leading-tight">
            <div className="text-[16px] font-semibold text-white leading-none">
              {bundle.social}
            </div>
            <div className="mt-1.5 text-[14px] text-[#939294] leading-none">Social Chips</div>
          </div>
        </div>

        <button
          type="button"
          className="mt-3 w-full rounded-[8px] bg-[#7717FF] hover:bg-[#8a30ff] py-2.5 text-[14px] font-bold text-white transition-colors"
        >
          {bundle.price}
        </button>
      </div>
    </div>
  );
}

export default function BuyCoinsPage() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none opacity-50 blur-[1px]"
      >
        <Home />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/45"
      />

      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-center pb-12">
        <div className="relative w-full max-w-[622px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-[170px] h-[276px] w-[276px] rounded-full bg-[#7717FF]/45 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-[170px] h-[276px] w-[276px] rounded-full bg-[#7717FF]/45 blur-[110px]"
          />

          <div className="relative rounded-[20px] border border-[#232325] bg-[#0F0F14]/95 backdrop-blur-md p-[30px]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-5">
              <img
                src={walletIcon}
                alt=""
                className="h-[74px] w-[69px] select-none"
                draggable={false}
              />
              <h2 className="text-[28px] font-bold text-white leading-tight">
                SUPR<span className="text-promo-red">EX</span> Wallet
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Close"
              className="text-text-muted hover:text-white transition-colors mt-2"
            >
              <X size={24} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-8 flex items-center gap-2 text-white"
          >
            <ArrowLeft size={20} />
            <span className="text-[20px] font-semibold">Buy D1 Chips</span>
          </button>

          <div className="mt-6">
            <h3 className="text-[28px] font-bold text-white leading-tight">Bundles</h3>
            <p className="mt-1 text-[16px] text-[#939294]">
              Please choose one of the following bundle options
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-[19px]">
            {BUNDLES.map((b) => (
              <BundleCard key={b.price} bundle={b} />
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-[#232325]">
            <p className="text-center text-[14px] text-[#939294]">
              Maximum buy of $9,000.00 USD per day.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
