import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
	const [ { basket }, dispatch ] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal({basket.length} items) : <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This Order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Check Out</button>
		</div>
	);
}

export default Subtotal;
