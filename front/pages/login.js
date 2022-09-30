import Login from "../components/LoginSection";
import Register from "../components/RegisterSection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const LoginPage = () => 
{
    return (
        <div className="container-wrap">
            <Header />
            <div className="boxes">
                <Login />
                <Register />
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;