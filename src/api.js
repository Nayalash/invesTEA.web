export const fetchData = async (symbol) => {
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/stocks/forecast/${symbol}`);
        const data = await response.json();
        console.log(data);
        return data.map(item => {
            return {
                buy: item.buy,
                hold: item.hold,
                sell: item.sell
            }
        }); // Extracting the "buy" field from each item
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
};
