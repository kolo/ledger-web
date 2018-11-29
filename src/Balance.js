import React from 'react';
import currency from 'currency.js';

import './Balance.scss';

const currencyOptions = {
  formatWithSymbol: true,
  pattern: '# !',
  symbol: '€'
}

const assets = [
  {
    key: 'cash',
    name: 'Cash',
    amount: currency('67.29', currencyOptions)
  },
  {
    key: 'commerzbank',
    name: 'Commerzbank',
    amount: currency('12742.02', currencyOptions)
  },
  {
    key: 'n26',
    name: 'Number 26',
    amount: currency('318.4', currencyOptions)
  }
];

function Balance() {
  var rows = assets.map((asset) => {
    return (
      <tr key={asset.key}>
        <td className='balance-table__item'>{asset.name}</td>
        <td className='balance-table__item--number'>{asset.amount.format()}</td>
      </tr>
    );
  });

  rows.push(
    <tr key='total'>
      <td className='balance-table__item--total'>Total</td>
      <td className='balance-table__item--total balance-table__item--number'>{calcTotal(assets).format()}</td>
    </tr>
  );

  return (
    <section>
      <article>
        <h1>Balance</h1>
        <table className='balance-table'>
          <tbody>{rows}</tbody>
        </table>
      </article>
    </section>
  );
};

function calcTotal(assets) {
  var total = currency(0, currencyOptions);
  assets.forEach(({ amount }) => {
    total = total.add(amount);
  });

  return total;
}

export default Balance;