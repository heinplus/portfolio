import { createBoard } from '@wixc3/react-board';
import { Intro } from '../../../components/intro/intro';

export default createBoard({
    name: 'Intro',
    Board: () => <Intro />,
    environmentProps: {
        windowWidth: 612,
    },
});
