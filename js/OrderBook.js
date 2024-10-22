import { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
export default function OrderBook() {
    const [searchImage, setSearchImage] = useState(false);

    const toggleSearch = () => {
        setSearchImage(!searchImage);
    };

    return (
        <div className="orderBook">
            <Header toggleSearch={toggleSearch} />
            
            {searchImage && <SearchBar toggleSearch={toggleSearch} />}
            <div className="orderBookContent">
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Name..." className="form-input"></input>
                        <input type="email" placeholder="Email..." className="form-input"></input>
                        <input type="text" placeholder="Book Name..." className="form-input"></input>
                        <input type="text" placeholder="Author Name..." className="form-input"></input>
                    </div>
                    <div style={{ position: 'relative', left: "-30px", top: "10px" }}>
                        <textarea placeholder="Additional Notes" className="additionalNotes"></textarea>
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
