export default function Flex() {

    const GetRandomColor = (): string => {
        const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        // setRandom(randomColor);
        return randomColor
    };

    return (
        <div className="flex flex-wrap">
            <div className="sm: w-64" style={{ backgroundColor: GetRandomColor() }}>01</div>
            <div className="sm: w-64" style={{ backgroundColor: GetRandomColor() }}>02</div>
            <div className="sm: w-64" style={{ backgroundColor: GetRandomColor() }}>03</div>
            
        </div>
        
    )
    
}

