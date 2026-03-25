import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JUICE_PRODUCTS } from '../data/mockData';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = JUICE_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-display font-bold text-text-main mb-4">Product Not Found</h2>
        <Link to="/products" className="text-primary hover:underline">Return to Products</Link>
      </div>
    );
  }

  return (
    <main className="max-w-[1440px] mx-auto px-6 lg:px-16 py-8">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 py-4 mb-4 text-sm">
        <Link to="/" className="text-muted hover:text-primary transition-colors font-medium">Home</Link>
        <span className="text-muted material-symbols-outlined text-[16px]">chevron_right</span>
        <Link to="/products" className="text-muted hover:text-primary transition-colors font-medium">Products</Link>
        <span className="text-muted material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-text-main font-semibold">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">
        {/* LEFT COLUMN: Sticky Gallery */}
        <div className="w-full lg:w-1/2">
          <div className="lg:sticky lg:top-32 flex flex-col gap-6">

            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/5] bg-surface rounded-[3rem] shadow-soft flex items-center justify-center overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 w-[150%] h-[150%] -top-1/4 -left-1/4 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_20s_linear_infinite]"
                style={{ backgroundColor: product.bgColor === '#FFF9F5' || product.bgColor === '#F0FAEE' ? '#f26431' : '#8BA17E' }}
              ></div>
              <img
                src={product.imageUrl}
                onError={(e) => { e.currentTarget.src = product.fallbackUrl; }}
                alt={product.name}
                className="relative z-10 w-[70%] h-auto object-contain drop-shadow-2xl transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                {product.badge && (
                  <span className={`text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider ${product.badgeType === 'primary' ? 'bg-primary text-white shadow-md' : 'bg-accent text-text-main'}`}>
                    {product.badge}
                  </span>
                )}
                <span className="bg-text-main text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">100% Organic</span>
              </div>
            </div>



          </div>
        </div>

        {/* RIGHT COLUMN: Scrollable Info */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4 pb-24">

          <div className="mb-8">
            <h1 className="font-display font-black text-text-main text-[48px] lg:text-[64px] leading-[1.1] mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-muted font-display font-medium mb-6">Sweet, Tangy, Earthy &amp; Energizing</p>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-display font-bold text-text-main">0.200 OMR</span>
              <span className="text-muted text-lg pb-1">/ 200 mL bottle</span>
            </div>

            <p className="text-lg leading-relaxed text-text-main/80 mb-10">
              {product.description} It's the perfect morning lift or afternoon refresh, packed with Vitamin C and anti-inflammatory goodness straight from our farms.
            </p>
          </div>

          {/* Ingredients Visuals */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-muted uppercase tracking-widest mb-6">Blended With</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-8">
              {product.ingredients.map((ing, i) => (
                <div key={i} className="flex flex-col items-center gap-3 w-28">
                  <div className="size-20 rounded-full bg-surface shadow-sm border border-muted/10 flex items-center justify-center overflow-hidden p-2">
                    <img src={ing.img} className="w-full h-full object-cover rounded-full" alt={ing.name} />
                  </div>
                  <span className="text-sm font-medium text-text-main text-center leading-tight">{ing.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accordions */}
          <div className="flex flex-col border-t border-muted/20">

            <details className="group border-b border-muted/20" open>
              <summary className="flex justify-between items-center font-display font-semibold cursor-pointer list-none py-6 text-xl text-text-main hover:text-primary transition-colors">
                <span>Nutritional Facts</span>
                <span className="material-symbols-outlined text-muted group-hover:text-primary group-open:hidden">add</span>
                <span className="material-symbols-outlined text-primary hidden group-open:block">remove</span>
              </summary>
              <div className="text-text-main/80 pb-6 text-base leading-relaxed">
                <div className="bg-surface p-6 rounded-2xl border border-muted/10 shadow-sm font-display text-sm">
                  <div className="flex justify-between border-b border-text-main/10 pb-2 mb-2 font-bold text-lg">
                    <span>Calories</span>
                    <span>{product.nutrition.calories}</span>
                  </div>
                  {product.nutrition.facts.map((fact, index) => (
                    <div key={index} className={`flex justify-between ${index === product.nutrition.facts.length - 1 ? 'py-2' : 'border-b border-text-main/10 py-2'}`}>
                      <span className="font-bold">{fact.label}</span>
                      <span className="font-bold">{fact.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </details>

            <details className="group border-b border-muted/20">
              <summary className="flex justify-between items-center font-display font-semibold cursor-pointer list-none py-6 text-xl text-text-main hover:text-primary transition-colors">
                <span>Health Benefits</span>
                <span className="material-symbols-outlined text-muted group-hover:text-primary group-open:hidden">add</span>
                <span className="material-symbols-outlined text-primary hidden group-open:block">remove</span>
              </summary>
              <div className="text-text-main/80 pb-6 text-base leading-relaxed">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <strong className="block text-text-main">Immune Support</strong>
                      Rich in Vitamin C to help fortify your daily defenses.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <strong className="block text-text-main">Anti-Inflammatory</strong>
                      Aids in reducing natural inflammation.
                    </div>
                  </li>
                </ul>
              </div>
            </details>

            <details className="group border-b border-muted/20">
              <summary className="flex justify-between items-center font-display font-semibold cursor-pointer list-none py-6 text-xl text-text-main hover:text-primary transition-colors">
                <span>Sourcing &amp; Farm Story</span>
                <span className="material-symbols-outlined text-muted group-hover:text-primary group-open:hidden">add</span>
                <span className="material-symbols-outlined text-primary hidden group-open:block">remove</span>
              </summary>
              <div className="text-text-main/80 pb-6 text-base leading-relaxed">
                <p>
                  The ingredients for {product.name} are carefully collected from vibrant local Omani markets. By sourcing our fruits and produce this way, we actively support both regional Omani agriculture and the diverse international farmers who supply these rich community hubs.
                </p>
              </div>
            </details>

          </div>
        </div>
      </div>
    </main>
  );
};
