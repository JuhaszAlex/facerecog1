import React from 'react';
import './ErrorMsg.css';

const ErrorMsg = ({isErrorOn, reason, okButton}) => {
	if(!isErrorOn) {
		return null;
	}
	return (
		<div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
			<h1 className="warning">{`${reason}`}</h1>
			<h1 onClick={okButton} className="f10 mh3 underline dim i link tr pointer">Ok</h1>
		</div>
	);
}

export default ErrorMsg;