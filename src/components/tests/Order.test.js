import { shallow } from 'enzyme';
import Order from '../Order';

describe('Order component', () => {
    let wrapper;
    
    beforeEach(() => {
        const props = {
            orders: [{
                id: '1',
                showId: 'show1',
                subTotal: 320,
                serviceTax: 44.80,
                SBC: 1.60,
                KKC: 1.60,
                total: 368,
            }],
        }
        wrapper = shallow(<Order {...props}/>);
    });

    it('table should be render', () => {
        const element = wrapper.find('table');
        expect(element.length).toEqual(2);
    });

    it('table should not be render', () => {
        wrapper.setProps({
            orders: [],
        });
        const element = wrapper.find('table');
        expect(element.length).toEqual(0);
    });
});
