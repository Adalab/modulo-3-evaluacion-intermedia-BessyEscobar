import PropTypes from "prop-types";

function QuoteItem( { quote, Character}  ) {

    return (
      <>
        <li className="">But they don`t know that we know they know we know! - Phoebe</li>
        <li className="">I got off the plane. - Rachel</li>
        <li className="">We were on a break! - Ross</li>
        <li className="">Here come the meat sweats. - Joey</li>
        <li className="">I`m not so good with the advice. Can I interest you in a sarcastic comment? - Chandler</li>
      </>
    );
  }

  QuoteItem.propTypes = {
    quote: PropTypes.string.isRequired,
    Character: PropTypes.string.isRequired
  };
  
export default QuoteItem;