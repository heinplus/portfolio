import { createBoard } from '@wixc3/react-board';
import { Portfolio } from '../../../components/portfolio/portfolio';

export default createBoard({
    name: 'Portfolio',
    Board: () => <Portfolio />,
    environmentProps: {
        windowWidth: 1034,
        canvasWidth: 899,
    },
});
