
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  {/*useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firebase.database().ref('products').once('value');
        const data = snapshot.val();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); */}

  return (
    <div>home</div>
  )
}

export default Home;
