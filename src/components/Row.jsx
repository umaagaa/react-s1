import Button from './Button'; 

const Row = ({color}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
            <Button text="Button 1" color={color} />
            <Button text="Button 2" color={color} />
            <Button text="Button 3" color={color} />
            <Button text="Button 4" color={color} />
        </div>
    );
};

export default Row;
