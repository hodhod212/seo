import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer style={{backgroundColor:'black'}}>
        <p style={{display:'flex',justifyContent:'center',fontSize:26,color:'white',padding:20}}> &copy; 2022 Ali Ezadkhaha </p>
      </footer> 
    </div>
  );
}

export default MyApp;
