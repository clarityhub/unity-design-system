import emoji from 'node-emoji';

const Emojify = ({ children }) => emoji.emojify(children);

export default Emojify;
