import MenuItem from './MenuItem';
import { MdAddHome, MdMapsHomeWork } from 'react-icons/md';

const HostMenu = () => {
    return <>
    <MenuItem
                icon={MdAddHome}
                label='Add Room'
                address='add-room'
              />
               <MenuItem
                icon={MdMapsHomeWork}
                label='My Listings'
                address='my-listings'
              />
    </>
};

export default HostMenu;