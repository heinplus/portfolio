import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'App',
    Board: () => (
        <MemoryRouter>
            <App />
        </MemoryRouter>
    ),
    environmentProps: {
        windowWidth: 662,
        canvasWidth: 997,
        windowHeight: 724,
        canvasHeight: 2326,
    },
});
