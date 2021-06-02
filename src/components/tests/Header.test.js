import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header component', () => {
    let wrapper;
    
    beforeEach(() => {
        const props = {
            shows: {
                'show1': {
                    showId: 'show1',
                }
            }
        }
        wrapper = shallow(<Header {...props}/>);
    });

    it('should render nav element', () => {
        const navElement = wrapper.find('nav');
        expect(navElement.exists()).toBe(true);
    });

    it('should render nav element', () => {
        const navLink = wrapper.find('NavLink');
        expect(navLink.length).toEqual(2);
    });
});
