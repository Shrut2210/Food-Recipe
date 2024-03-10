import Punjabi from "./Photos/Food/punjabi.jpg"
import South from "./Photos/Food/southindian.jpg"
import Chin from "./Photos/Food/chinese.webp"
import Mexican from "./Photos/Food/Mexican.jpg"
import Thai from "./Photos/Food/Thai.webp"
import European from "./Photos/Food/European.jpg"
import Rajsthan from "./Photos/Food/Rajasthani.jpg"
import Italian from "./Photos/Food/Italian Recipes.jpg"
import Con from "./Photos/Food/Continental.jpg"
import Bangali from "./Photos/Food/Bengali Recipes.webp"
import Sindhi from "./Photos/Food/Sindhi.jpg"
import Maharashtra from "./Photos/Food/Maharashtrian Recipes.jpg"
import afghan from "./Photos/Food/Afghan.jpg"
import african from "./Photos/Food/African.webp"
import arb from "./Photos/Food/Arab.jpg"
import app from "./Photos/Food/Appetizer.jpg"
import bihar from "./Photos/Food/bihari.jpeg"
import brit from "./Photos/Food/british.jpg"
import brun from "./Photos/Food/brunch.jpeg"
import car from "./Photos/Food/carebian.jpg"
import coorg from "./Photos/Food/coorg.webp"
import dess from "./Photos/Food/dessert.jpg"
import french from "./Photos/Food/french.webp"
import fusion from "./Photos/Food/fusion.jpeg"
import greek from "./Photos/Food/greek.webp"
import Gujarati from "./Photos/Food/gujrati.jpg"
import Haryana from "./Photos/Food/haryana.jpg"
import Himachal from "./Photos/Food/himachal.webp"
import Hyderabadi from "./Photos/Food/hydrabad.jpg"
import indo from "./Photos/Food/indo-chinese-food.jpg"
import Indonesian from "./Photos/Food/indonesian.jpeg"
import Japanese from "./Photos/Food/japanese.jpeg"
import Jewish from "./Photos/Food/jewish.jpg"
import Jharkhand from "./Photos/Food/jharkhand.webp"
import Kashmiri from "./Photos/Food/kashmiri.webp"
import Korean from "./Photos/Food/korean.webp"
import Lucknowi from "./Photos/Food/lucknow.jpg"
import Malaysian from "./Photos/Food/malaysian.jpg"
import Malvani from "./Photos/Food/malvani.webp"
import Mangalorean from "./Photos/Food/mangalorean.jpg"
import Middle from "./Photos/Food/middle.jpg"
import Mughlai from "./Photos/Food/mughlai.jpeg"
import Nepalese from "./Photos/Food/nepalese.jpg"
import Parsi from "./Photos/Food/parsi.jpg"
import Snack from "./Photos/Food/snack.jpg"
import sri from "./Photos/Food/sri lankan.webp"
import Uttar from "./Photos/Food/utter.webp"
import Vietnamese from "./Photos/Food/vietnamese.jpeg"
import { Link, useParams } from "react-router-dom"


export default function Home() {


    return (
        <>

            {/* <div className="flex flex-wrap justify-center m-5 mb-2 p-5 w-128">
                <input type="search" placeholder="Enter food item..." className="flex border-none text-sm pt-2 pe-5 pb-2 ps-2 outline-none" 
                onChange={(e) => {setFoods(foods.filter((x) => x.TranslatedRecipeName.toLowerCase().includes(e.target.value)))
                console.log(foods)}
            }/>
            </div> */}

            <div class="relative flex p-7 mb-4 items-center">
                <div class="flex-grow border-t border-green-700"></div>
                <span class="flex-shrink mx-4 text-green-700">What's In Your Mind ?</span>
                <div class="flex-grow border-t border-green-700"></div>
            </div>

            <div className="flex justify-center m-3 p-4 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:grid-cols-6">
                    <div>
                        <Link to="/Afghan">
                            <div className="flex flex-col justify-center items-center">
                                <img src={afghan} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Afghan</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/African">
                        <div className="flex flex-col justify-center items-center">
                                <img src={african} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">African</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Appetizer">
                        <div className="flex flex-col justify-center items-center">
                                <img src={app} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Appetizer</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Arab">
                        <div className="flex flex-col justify-center items-center">
                                <img src={arb} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Arab</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Bengali_Recipes">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Bangali} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Bengali Recipes</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Bihari">
                        <div className="flex flex-col justify-center items-center">
                                <img src={bihar} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Bihari</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/British">
                        <div className="flex flex-col justify-center items-center">
                                <img src={brit} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">British</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Brunch">
                        <div className="flex flex-col justify-center items-center">
                                <img src={brun} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 teundedxt-center">Brunch</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Caribbean">
                        <div className="flex flex-col justify-center items-center">
                                <img src={car} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Caribbean</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Chinese">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Chin} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Chinese</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Continental">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Con} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Continental</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Coorg">
                        <div className="flex flex-col justify-center items-center">
                                <img src={coorg} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Coorg</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Dessert">
                        <div className="flex flex-col justify-center items-center">
                                <img src={dess} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Dessert</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/European">
                        <div className="flex flex-col justify-center items-center">
                                <img src={European} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">European</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/French">
                        <div className="flex flex-col justify-center items-center">
                                <img src={french} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">French</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Fusion">
                        <div className="flex flex-col justify-center items-center">
                                <img src={fusion} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Fusion</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Greek">
                            <div className="flex flex-col justify-center items-center">
                                <img src={greek} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Greek</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Gujarati_Recipes">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Gujarati} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Gujarati Recipes</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Haryana">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Haryana} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Haryana</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Himachal">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Himachal} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Himachal</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Hyderabadi">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Hyderabadi} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Hyderabadi</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Indo_Chinese">
                        <div className="flex flex-col justify-center items-center">
                                <img src={indo} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Indo Chinese</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Indonesian">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Indonesian} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Indonesian</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Italian_Recipes">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Italian} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 teundedxt-center">Italian Recipes</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Japanese">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Japanese} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Japanese</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Jewish">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Jewish} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Jewish</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Jharkhand">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Jharkhand} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Jharkhand</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Kashmiri">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Kashmiri} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Kashmiri</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Korean">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Korean} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Korean</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Lucknowi">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Lucknowi} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Lucknowi</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Maharashtrian_Recipes">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Maharashtra} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Maharashtrian Recipes</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Malaysian">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Malaysian} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Malaysian</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Malvani">
                            <div className="flex flex-col justify-center items-center">
                                <img src={Malvani} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Malvani</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Mangalorean">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Mangalorean} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Mangalorean</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Mexican">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Mexican} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Mexican</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Middle_Eastern">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Middle} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Middle Eastern</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Mughlai">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Mughlai} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Mughlai</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Nepalese">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Nepalese} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Nepalese</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Parsi_Recipes">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Parsi} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Parsi Recipes</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Punjabi">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Punjabi} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 teundedxt-center">Punjabi</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Rajasthani">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Rajsthan} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Rajasthani</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Sindhi">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Sindhi} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Sindhi</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Snack">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Snack} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Snack</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/South_Indian_Recipes">
                        <div className="flex flex-col justify-center items-center">
                                <img src={South} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">South Indian Recipes</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Sri_Lankan">
                        <div className="flex flex-col justify-center items-center">
                                <img src={sri} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Sri Lankan</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Thai">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Thai} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Thai</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Uttar_Pradesh">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Uttar} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Uttar Pradesh</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Vietnamese">
                        <div className="flex flex-col justify-center items-center">
                                <img src={Vietnamese} className="h-12 w-14 border rounded-3xl"/>
                                <span className="font-semibold text-sm text-red-600 text-center">Vietnamese</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}