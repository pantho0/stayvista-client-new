/* eslint-disable react/prop-types */
import Button from "../../components/Button/Button";
import Calender from "./Calender";




const RoomReservation = ({rooms}) => {
    // const [value, setValue] = useState({
    //     startDate : new Date(rooms?.from),
    //     endDate : new Date(rooms?.to),
    //     key: 'selection'
    // })
    // const totalDays =parseInt(
    //     formatDistance(new Date(rooms?.to), new Date(rooms?.from)).split(' ')[0]
    // );
    // console.log(totalDays);
    //     const totalPrice = totalDays * rooms?.price;
    //     console.log(totalPrice);
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">${rooms?.price}</div>
                <div className="font-light text-neutral-600">/night</div>
            </div>
            <hr />
            <Calender/>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}/>
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <div>
                    Total
                </div>
                <div>
                    ${rooms.price}
                </div>
            </div>
        </div>
    );
};

export default RoomReservation;