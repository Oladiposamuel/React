import React, { useState } from "react";
import Bodysearch from "./Bodysearch";
import './Productbody.css';
import products from "./Products";
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import Bigrating from "./Bigrating";
import Item from "./Item";
import Description from "./Description";
import Review from "./Review";


function Productbody() {
  const[showdescription, Setshowdescription] = useState(false);
  const[showreview, Setshowreview] = useState(true);

  const showrev = () => {

     if(!showdescription) {
       Setshowdescription(true)
       Setshowreview(false)
     }
    
  }

  const showdes = () => {
    if(!showreview) {
      Setshowdescription(false)
      Setshowreview(true)
    }
  }

    return (
      <div className="productbody">
          <Bodysearch />
          <div className="sub__productbody__body">
          <div className="sub__productbody__body__content">
            <div className="electronics__label">
              <div className="home__label">Home</div> <span> <IoMdArrowDropright style={{marginTop: '0px'}} color="#a6c0c9" size="1rem" />  </span>  <div className="elect__label">Electronics</div>
            </div>

            <div className="sub__productbody__one">
                 <div className="productbody__one__img">
                    <img src="https://i.ibb.co/0QVTb7K/1-2x.png" alt = "oraimo headphones" className="productimage" />
                    <div className="emoji__div">
                        <button type="button" className="emoji"><img src="https://i.ibb.co/cyzZwfx/Love-Icon2.png" alt="emoji" /></button>
                    </div>
                </div>
                <div className="productbody__one__text">
                    <div className="productbody__one__text1">
                        <span>Oraimo head phones</span>
                    </div>

                    <div className="productbody__one__text2">
                        <Bigrating />
                    </div>

                    <div className="productbody__one__text3">
                        <div className="sub__text3">
                          <div className="sub__text3__one">
                              
                          </div>
                          <div className="sub__text3__two">
                            9,000.
                          </div>
                          <div className="sub__text3__three">
                            00
                          </div>
                        </div>
                    </div>

                    <div className="productbody__one__text4">
                        <span className="text4__one">
                          -13%
                        </span>
                        <span className="text4__two">
                          <del>N275,000</del>
                        </span>
                    </div>

                    <div className="productbody__one__text5">
                        <div className="sub__text5__one">
                              Qty
                        </div>
                        <div className="sub__text5__two">
                          <div ><button type="buttton" className="button1">-</button></div>
                          <div className="button2">1</div>
                          <div ><button type="buttton" className="button3"><span className="add">+</span></button></div>
                        </div>
                    </div>

                    <div className="productbody__one__text6">
                      <div className="sub__text5__one">
                              Size
                        </div>
                        <div className="sub__text5__two">
                          <div ><button type="buttton" className="button1__size">S</button></div>
                          <div ><button type="buttton" className="button1__size">M</button></div>
                          <div ><button type="buttton" className="button3__size"><span className="add">L</span></button></div>
                          <div ><button type="buttton" className="button3__size"><span className="add">XL</span></button></div>
                          <div ><button type="buttton" className="button3__size"> <span className="add">XXL</span></button></div>
                        </div>
                    </div>

                    <div className="productbody__one__text7">
                        <div className="sub__text5__one">
                              Colours
                        </div>
                        <div className="sub__text5__two">
                          <div ><button type="buttton" className="button__color1"></button></div>
                          <div ><button type="buttton" className="button__color2"></button></div>
                          <div ><button type="buttton" className="button__color3"></button></div>
                          <div ><button type="buttton" className="button__color4"></button></div>
                          <div ><button type="buttton" className="button__color5"></button></div>
                          <div ><button type="buttton" className="button__color6"></button></div>
                          <div ><button type="buttton" className="button__color7"></button></div>
                        </div>
                    </div>

                    <div className="productbody__one__text8">
                          <button type="button" className="addtocartbtn">Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="sub__productbody__two">
              <div className="productbody__two1">
                  <div className="two1__content">
                    <div className="two1__btn">
                      <button type="button" className="description"><span className="description__text" onClick={() => {showdes()}}> Description </span></button>
                      <button type="button" className="review" onClick={() => {showrev()}}> <span className="review__text">Review  </span></button>
                    </div>
                  </div>
                  <div className="two1__content2">
                     {showdescription || <Description /> }
                     {showreview || <Review />}
                       
                  </div>
              </div>
              <div className="productbody__two2">
                <div className="div">
                    <div className="div1">
                      <span className="round"></span>
                    </div>
                    <div className="div2">
                      <p className="axz">AXZ Limited</p>
                    </div>
                    <div className="div3">
                      <span className="location">Lagos, Nigeria</span>
                    </div>
                    <div className="div4">
                      <div className="ads">
                        <span className="ads__1">125</span>
                        <span className="ad">Ads</span>
                      </div>
                      <div className="thinline"></div>
                      <div className="sold">
                        <span className="ads__1">80</span>
                        <span className="ad">Sold</span>
                      </div>
                    </div>
                    <div className="div5">
                      <button type="button" className="call">Call</button>
                      <button type="button" className="call">Follow</button>
                      <button type="button" className="viewsite">View Site</button>
                    </div>
                    <div className="div6">
                      <Bigrating />
                    </div>
                    <div className="div7">
                      <span className="samsung__rate">Rate store</span>
                    </div>
                    <div className="div8">
                      <div className="samsung__artdesign">ART DESIGN Nigeria Limited is an all round company created to help sell in the shobbu market place.</div>
                    </div>
                </div>
                
              </div>
            </div>

            <div className="sub__productbody__three">
              <div className="productbody3__one">
                <p className="similar"> Similar items</p>
              </div>
              <div className="productbody3__two">
              <Item 
                        image={"https://cdn.shopify.com/s/files/1/0411/2465/9349/products/1_b99afee7-fd82-4c4e-89ea-82ef57c4261a.jpg?v=1602664896"}
                        title={"Oraimo head phones"}
                        rating={true}
                        price={"9,000"}
                    />
                    <Item 
                        image= {"data:image/jpeg;base64,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"}  
                        title={"IWC watch"}
                        rating={true}
                        price={"15,000"}
                    />

                    <Item 
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLfq8dWZnYh3hdasly5mLRTMAUdv0-1hVcQ&usqp=CAU"}
                        title={"AirPods Pro"}
                        rating={true}
                        price={"50,000"}
                    />

                    <Item 
                        image={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYYGRgaGhgaGBoYGBgYGBkYGBwaGhgYGhocIS4lHCErIRgYJjgmKzAxNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQkJCE0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEAwYDBgUDBAMBAAABAgADEQQSITEFQVEGImFxgZETMqFCUrHB0fAUYnKC4Qcj8UOSosIVNNIz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAICAwEAAwAAAAAAAAAAAQIRITEDEkFREyJh/9oADAMBAAIRAxEAPwDjMEEEAR/CDvD96WjEkYOqFYE7c/XSax7iXpZVky9Lqf8AnSR3IZWsD3SHF/unRvraSMbWGe4III5fjI6VCCBa4AI81O48/wBJ2tjGIiVzA+UmqgtK809hv0PVeRj4uP34TWOX6ZRLFJesWbLz/fSVz1AOdozVr6aG/wCEt8kietqYa1mQ3vldT9ReJrpYkDQCowHLS55+/tIfx25WGxBtrpqN42STqST5m+2/6zjc9tzFMGKAuBrrp05a+MaruTqfbpGhzt5+hFj+/CSaaXFib3vfoCNfbn7TPtaupDLHSNkxTHlHMJhHqsEpozsdlQFifQcvGLyGkWSaKmD4ZRirqVYGxDAgg9CDqI+MQBOmMkZytXtHK1Eg2vKXLFUMRmvr6RV5z8uUt4XGaNZJIp0Lw6dO8lIlpzaITCCSEw4HKOIYsvAOnSEkphY1hzrLWkNJlUNKRk+mhtGXa0AxECULxLNaRWxVpHqYy8ujaxuIbVh1lOMSYpWYyC3SoI8jXlUqtHUrEby6NrKwhSF/FHpBIOWQQQTaBBBBAMMY6DzF4zH8O2tjsfxlgTmO1z13MCDWOkC/Lw8+Y8L/AKQrdPMemv8Az6TWkIy8j+/GKC/jY+ux/fSO5c3QWAufA26ctf3aKyG4v9rQ9Mw1W/Ig90+OsaNmkXwNwfx5HpqIr4Ol787+V+v4edpMpU+4So1G452+0pPXS48AecPurqxAUg6blgeg8es16/qbRkUA2I0sT6dPqwjRq/ZHOwNudrjT6e0s+FcGr41z8JbILBnbRFsOZG555Rc6+s6Z2e7K0MLZgM9Qf9RgLg/yLsnPx8ZmTfRbpieCdhcRWs1b/YpnXvi9Rh/KnLza3rNzg+GU8MhSghTN87sc1Wpb7zch/Kth4by/KSt4jUVEZ3NlUFmNr6KLnzmtSJu1je23CQ9IYhB36YAe32k5N5rf2v0nPWe87OmV1I3SovoVcfmDOO4jDlHdDujMp/tJH5TNaFhnsZpeHcKesRYWBtqZnKVPnN32H4opcI3IaXiYy9pahcT4Y2GcKxvcbxlHvN12n4aKyFhuNR+Uw1GlbQ7jeYymquN2e0jWS8cdYSyNH6BAktMTK+0WqTIlVcQIznjLyVhkE0EBCYf8GZYIAJLutoRUJhLSRTQCKxNcCV+cmBcI62jThWOkri7QLWImVWv8OIJXfxhgjldxzeCCCbZCCCHAEF4UEC4UZ1zjwLeDDnbp+V438Ai4A1BLL9MyHx287eMr6blTdSQeoNjJWPpPTbKzE6KwNzZlYAqR6GdJlwmkhVUEZjZTyJ1CncW6g6jqCecDYpFGUd/lsQtuWp1uDsbczKu0EntfhpKfGsSbd29r5RrptrvL7sZ2b/jHZ3JFJCM5GjOx2UHl1J6eJEy87T2EwypgqJUfPmdj1YsQSeuigegjH+15LxF3h8OqKqqoVV0VVFlA8BJCpDVYoCdHMLSLiKYO4v4dRzEmhZD4rSDUqitexpuDY2NipvY8jJWp2ocAo+GgH2Lp60yaZ+qTm3aemExdUHZmDjxzqGJ9yZtexmKZkek986EML3uVe51vrvrfo4jHarsqcQlTEU2/3Ka60yPnRbm6nfNqdOdhMS7ksdfJj65WVhqGMpqCcpJt6Tc9jOyvdGIqvlB1VVOw31M5nNPwDiWKe1GldgNL8lHiZvDKfXPKfjrqUbrddV2mB7RYE0qmYfK34zZcGoVEQKzlm59BKzH01qVwjsMvOXOS9JjdMcjR0Sz49w1KT9w3XnztK1DPPcbLqtylrHiRaRwYq8A8kkJoJHzxWeApq0ScS0RaKVYU2STvHqSRQEcUwgrRt0jpiSsCP8OCP54IHOIIIJQIIIIAhiFFKIAnReGdn1xuFw7sCHFN0VgbaU3ZVB67ek52Z3ns7g/h4eghFilNA39ZGZ/qxnTxzdrOVcTrYMKzKXCupIKuCpBG4uLrv46+El4Hs5XrC9NQw01DLbX/AIM1nb7gb1arVKSXZdHVR3mW2ZWAG9h6zF4TC4pT/t064b+RagP/AI+cmpLzDe5wuF7DYn7RpqPFyfXQazovY9FpUP4cVFdqepI07tRmYaX65pz9eE8UrgBhUC9XdUA563IJl32W4G+Dq/FfE0hcFWRL1M6nkTpYg2N7H6ze58hq3uujqItVlYeKKOT5bXzFGRPLM+/oI4nF0Um+h3s1u8DzUjf8prcZ1VkFkTiiO1N1QAuyMq3NhmYWBJ6a/SO4fiKORbS/jGuPu60ytFWao/cTKLhC2mdjbuqu5PlJl01jN5SMGnCKlfE1qtGp8IU3WkrLmbN8NVVgNR3RlXwPSX/A2rrUyVQrG4UOmzhg5BIt3SAuo8ZccP4SKNJKSkWUWvfVmJuzHzYsZaUaCUtdC5+gmcfHrl08nl9uPk6c37Rf6eItZWpsRTa+ddyH3OU8lPTlaafgnAkooAFCr9T5mSyz1HNVSPhqCoXLqzXBZ819tLAWjyvYZmOk36ycuO6lKQovaw5CZDjOEbOXtoenKWOLxzOe6bASbqafeG8l5FX2eoo4ZWUHxhcT7Ggn/Yax3IOo/wAS44fw8KO7od5ZIjrL6yzVNuXYzhNakSGQkDmBcSNOusMyWyg+co8bhaNQ5HQKeR/zMXxT5VmV+ue2ilElcYwXwHyg3U7fpIQacbLLqtw9AIhAY9k0gFeDPEZDFCgYBq94pWiVp2ioC/gw4n4sOFc0ggglQcNltCkmvbKIEWKWEIqBM4ThzUr0kG71EXTxYC89AUdbnqSfeco/0w4X8TFfFIutIXH9baL9Mx9p1ugNJ2wmptjLtC4lwdK5D5nRwLB0NiRvlYEWIv6+MZp9n354qqR5KJcqscUjzm2dqyn2do/bL1P63JHsLSwWnSoIXCIgUEkgAE2F7X/Uxz4mtrgeF9ZH4hhS6EDfcX2J3sfaZ0bUGLq/HZ3qFcgVCisGKm5PM2GndNvG8k8KpCrWOhGmclAgU62tqTYEEctRt4QqmV2ZahzFgAikA2RR3tdTcFVPQd3YxrGV6pUlFdWctkCNl+RwrgOCoUsMxF25X62k4abAYWlRBbKiDqSBb+47DylTW47SL5EZnI3yA5fc7/23lJwrBM2IqBnzoqrZWzO5dibsGNzbKBpr83voqeCo1SBoGp2IZD3l12uNLmxFj7TUt+JqHeHYjNmcoQFuBm5tzFvDn6CFVovWJQGwv333Nj9kfzH6DzEceqHb4VLU/LpfKgG9266XIveTsQwopZRc7AbFnPXzM3tlGw/D0z2zvkQWYZgELG2UGwvoBsDbvC95S8dpqz/7bkqLZwFNlvexDbWNjNZhaHw1GY3Y6noCdTbnqTv5SsbjHfqBUZyCdEUsAqgAlm+Vdb6E3PIHWTsZqhRBZQNpLx+JGZVEl4qg6A1slwwzkpYqoPL/ADKDDU2qPnJ05TN/FnLR4bFCTBihKZaPjJFIBdzKLZKgIkHiHDw+oNjEpWvtFitaFVWJ7OCqhD/ONjMzV7NVlNgtx1nQKOIuZMWp4CYyxlWVzH/4KuPsH3hPwusN0M6gXHQRpnToJn0h7VyorlNmFj4w3qgTY9ouECqpZBZhznP3RlYq24M55Y+rUp56l4gQhHkEikwRyCFc3ggtDItKhSLeG55RCmOFDa8BMUoJIAFydh1J2ETLnsjhhUxtBTtnDH+wFv8A1lk3dFde7H8HGGw6KRZyM77Xznf/ALdB6S7FQDbX8I2EDaHnsehiHQodf+Z6NOIsRxJFsL3J2VdSfIDU+l4EFV97U1939hoPf0j+HwKDM6bsbk7nyPMAfnHLEHWAymEprvdm6sbnzAGi+glhTGgvvIqYXvlmNxpZdQC1zdmGzaZAL9D6wOMcUa/waOrtueSjqfr+7yf4IfG66F/h0xeofnIsyorfMSD1HK4v+ITgzuBnZvAE/XKlrDXqfrLDg/CFpjMbsx1ZjqzMfxEtsh2HztbyUbC3j067y6i7U2C4OlO9wCAO99w2176jcjqb2v7WpwyO2Yr3soQEMwugJIFlNrXvY2jqKP7BudLs1+nMX9zrDalzAGY6heQF9weW3qfDaUHRxFOkfhgAG1wBYWUc/L/EbOGeoyudFU91TfUfeYcj08Ol49Rfl7nx2t++vOOVsYqfPe1um/l1iX8Wo+OrMTp5LfryPvykijhVpUggtrudrsx1Y/X0EicLz1XaqwyoNEQjnvnPj4eMmrZ6g5pTvryLkWA9AW9T4Rb8QVStlCpSp3GijTKii3U7geEqsR2dRFZviZTvsoQE8rb2l+GLOQPsqLnldifc2X6xtMOoZnZixXQZrZVNrkgde9a8zsYHFLVpWzoygmwJGhIgo1CdTtNRxTCfxQKhsia3e12LKdAinS173bwsN7jnHE6tbDVDScqxFiGXZlOxty2Okt45al21QxQGghpWJmQpcZPMSwo8dXnJMjTWYY+MlfEmWTjydZf8Mq5kzsLX2Bmpdok5SYTOi7m5jNWsTzsJHd0QXMug7icdp0HjMFxpF+ISvPeSOM8au5VNZVIzMbnecfJlLxGsYSBHVEDpHKM5ti+FCk8U4JNrpymGx1gYQjNMjUayTUNltGaW8U5vAQZo+wH/AN2m3JQ5Y8lBUi59SB6zNmX/AGSqZaj62OT6A6/lNY9penblcER9KgIs2omJ4dx0oAGsym9rHfymkoYxXF1M7S7c01qTIcyG46R1MarLqLN05XkdMSRFOqvr8rdev7/ZlRE4xxMoAiDNUfQAcupPQAan/Ihdn8EVUs475JLnfbTe2q6bcgI9w/h4VmepZnYkXIIyr0Hnv7dBLlKS20O+pB5+o15RLpQR9jb+gfiw/E+3m4F3F9/nbr1HgfwGkbdLa8zt08wRsdz7QeH2R8xsNTvZh58+ZMB4cjY/yjUHzP70EWF5X1OrHUeg6flGlc727x2GndHXxH4mKBG32RufvHe2+9/czIN0BF+WyjYnp5eB5WvFKtxY+umn19IA/M7/AGV3IH5+cUGA0uMxOtiOmg8dBCw0KDd4ByFa2gAuORsfHy/w3guJ0lVkJCfDNiCdhoR5779Y5XfKrHoDbz5TGPVbIaqutc57U0RATYkmwdmsDkZjew8yLCLTTeYfEKKZqN3QxLa6d06Je+xyhdOsj4Jg6F272ZnyruPm/HSZqonxAi1iwQZGemxAy67sRrZbEi/S/LS9xvF6VMEIyMyj5VIOUdSBsJIE8W4gKCEhc727qLbYbnwA+u05NxvOapqFs61O+j9R08LbW6WnUeFYYuTVcZmbUDa/K56D9bRfEeCUat1cd6+YlQAFPl16+G9zLlN8EunH0RieskJgHbUKZs8fwWrRXOlNaib5k3t1Kb+15U4bHs7W7q+HOc7qdtTk1wTgwDh6lrDUDx8ZoMfximgsCLDlKjFuALG95QYmnr+sk8muovqusd2kzaJ7yvqY130LaSuCSZhlmMs7VkgJgSdpNp4Sw1knDvyh4hTaY22qqrC9olRaE6WMQ95US/4gQSBrBLoc/aJhtEzTJ2nBBTiwkoamt7GcPzpWqc1amo6gnMd+VyAPO0zGQCaz/T7jC0KzUqlslYBbn5QwvlzeBBI9pce2b0ti2XRlPoCdvwMcol6ffRha3I8gbgeW/vNJxLgm7pqN7bkEbE82Gm+/W8zvFbU0d7G4A0TQnMVAN9QRqdwZuzTK2wHHxfJUFiANQNOYvbzBl1SxCuAyMD6/u3rOf4XjFJ9D3DyB0NumunsTLGgSpzI5BvsDbl0PleWZWGm6p4g7GTaNeYzB8aOgqDwLgaC2+nLWX2GrZgGUhhyI19v2JrcqdNClSO5QfDy/Tp4SlpYvr+/STExHXQ9OfsNvWNLtOyHlbzNwfC1tv8nyIVDtdQPDfpfvAi8aR2OwA8WP5COqrff/APESBQQcyT9B/jz3jmRTpbT8unl9Ii5HzW8CNue/pHAIFfxPCZxp0IAJOVg2mVufP6c9hQYmoFYsyvnp0yEpBsny2ubDRxZVW+o6GbG0jYjBI41A02vfQ6i6karvyOwtIM2lKznLTR8Q6rmKE5QNbZ2OoXU2BG4NgTrFPwdg9PO+cktnA7o7gT4aqNbC5fU9OekvOHcOWjnCq3eI1LZjYX5nxJPm3rJC0Dqb87i/LS2lh5/92+ksuinMPTKiw35sNALchra/4ecjtTznKuiczzb9B+zsJLNNm0tZeQ6+Jv8AT92kU6QXXn1mdmhIllAtbw6DkJV8Q4HQqnMyAP8AfXuv7jf1lsxhEwrFY7s26g5CKg6Gyt9dD9JicdTKOVZSrDdWBUj0M7SySv4lwynWXJUQOOV7gqeqsNVPlM3CfF9q44qSwwmHJl1xrs18AlkYul7XPzLfk1tD0uPaQ6RAE45bnDpOSFUAiP4lxaRqri8j1qx2mVFXTnIZN9JNCkiClSA3lEDLBLX+GHSCXaacltFrS6xYWGTOmmRgAQrwjDAlQarFZAYQi0gbDs725q4dVp1VNWmNA1++o6XOjW8ZsqFfD4sZ8M6FtSyGyuC25Ct8pPMHunz1nI1qwvi2IYXVhsykgjyI1E3MksdNxXDKbnLUpAtzKgo68xmUnNtb7w8LSI/BcotRcabBhZh6gaeoEy2G7X4lMquy1kH2ayhjbwcWYed5f4XtZhawyvnoPawLf7qC+ndqDvry1Nx5y+0Z9aGeohtVSx5E2AJsbWbbmdY/QxBSzU203ym9iN9pdYe7gZWWohAGdXSoh/qNwy+otLLDdnEFjVy2G1NNAL6nvDW3gPeNfhtF4VxpahVDdHOmUaZvIgXb39ppqNNE5geC/mYwtNUGVEVB/KAPe2/rEazcnCLVGQ7N7j8+UWRaViNJdKppJYqUrxxWt4j3t+v+fZlWH70jiP8Av/MgeXry6xQEaA6Eg+G3na/7tFZD98+gAPPmPT2kDxYDcgeZtD+Kv3h+9YytJRruepNz6x0BRyHsP31hSvijqPeKz/u8aIHT6W8IgqvT8YEgmNmovUe4jXw16fU+X6e0JmHQew/fWAs1hy18hrG3c/0+J39uUbetIlat4y6DWPdSpS2hFiOvIznmKosrMoN7Ej05fSbLF1GbuqCSeQ1lbxCgqZEYgvldntyDMMoJ9TOXknG1xvOmbwlJy2smYmiARpJYIXlI2JqZtpw26kki2kYqG0W1MxlzY6yhfxDDiPiLBA5deC0IQ52cxiKETeGpgLtDET++UMNAOG1wLmFmjbNASznruLehiICYk/SZU5SqMpurFT1UkH6Tc8H/ANSa9MBa6LWUaZh3Xt4nYn2mEglmVnSWbdw4X23wdew+J8Nj9mqMup5BvlPvNALMLggg8wbj3E84XlhwvjmIw5vRqug6A3U+anSdJ5P1Li7/AJIpHIM5pwj/AFNOi4ilf+alp7qT+BmywnanC1lvTcOdO58r2JAJysQbDfyE3MpWdWLrGVKijPTXOttVXV18luMw8tfCVI7T6kZLEbgqQRtpYm43+ktU6qYeIpJVFqqK/QkWccu6w1HOSw2q17SOfs2PPRbX6jQ6H96xxO0T7b7XPdPuAthsen4RrE9mkb/+VQr0RxmUW2sy2I8zeVOL4biaIv8ADJXU5k76m/PujMPPLM3atJT7QkasL87bEjwINuY3EtsNxFHBynUbjS49pzcYrxFhuLai23lr194ocRZO8rai1tbDTcX5X+l7yey6dM+PCNaVXCsUWorUqqVZr2TUEjkxuARfyEebiR+zTH/iPW7Gb1tE01onvHYH2MgNxGryCD+4f+t402Jqtu6/2qzfU5ZdVNrFqLc7DzMiYhqaavUHoQB7mVmIqBfnrML/AHmRPIAb/WVlfiFJO8q3P3iLbW+3UN7d4G633vF1O6qyxPGLAigmUbfEYEDX7pOrf26TK/xVqxUnM5Qs7Ea3BWw30+Ym19AfGI4pxdtQSR81wL3zDQBmNm10I0S+uuki8OwpQF3Fnf7NrZV3AI5Ekkn9bzj5MpZqNYxdNVBEbo1E5mQajE6DSGlABb85wdCsZirmyyP3jvHsNR5mG5lEa0EO8KXSObCGDEXiledGChAekPKLXB9OcHOUC8Ba0DG3KNmQHeExvCJgkUI58XuFba5gwPpYj6D6xuFAMQRMVAEOEIIAilEAEWqwLzg3aLE0LCnVbL9x++vpfUeQImywHb2ptUpA+KNa/wDaf1nPcKdZbUxEzyh6yul4Xtjh3+bMh/mFh7jSXGF4xTfVKin1H5TkiR7JNTy36nrHW8R8Kr86I/ibZh5EaiQaeBwlJ1ITvknIHcuLjvHIrHvEAX2NrTmtPFOmod/IM1va8KvxmoSpLtdTdTzB8NPCX+SfierqzuSbnWFmE5SvaHEn/rN7J/8AmFiOJ13Uq1VirAhgQtiDoQbCa/lierf47itiVQ6XAzaak3GlwdLggWFzlJuBrKetxI2uzki17FmcbXA+dvusPl5ctL5D+KdtCx2t6Wy8vDSKRCTdiT5kznlnW5i0DcQA0Qnf7A8d+6FN/lOx2PXSOM79E5m5v6ALa9gXHe5ECQhUA5yxwFYGYuVXUKwWDVSG1ZhszbD+ldl89/GTHNzI9SvY6R2g/WZrR0Uoio2lhFIxY+ElU8PMiAqm0IIbyVibKJDpuSZU0VlEESYJdq5ZBaCCdWADRxXvpBBECWJO5iSYIJAIcEEAoIIIAEMQQQDEFoIIBiOpaCCSiZQQSyR9IIJlqJNBecDYvKbGCCAg4wRhq4YwQTSGXPSOU7nSCCZE2jSy6yQO8YIIqp2HwKnUx57IdIIJFMB7tePrUywQSBZxhGwiv/kWgglCTiM+8VSYDSCCQFpBBBA//9k="}
                        title={"Air Jordan"}
                        rating={true}
                        price={"9,000"}
                    />

                    <Item 
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzxm9ljHyUVkEBt11ZRLERAnRKA9hYKXqGQ&usqp=CAU"}
                        title={"I Phone X"}
                        rating={true}
                        price={"290,000"}
                    />

                    <Item 
                        image={"data:image/jpeg;base64,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"}
                        title={"VR Gear"}
                        rating={true}
                        price={"9,000"}
                    />

                    <Item 
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7m_rLPcUuJiCYtTpdd9mRfm2X2ENSJjSWA&usqp=CAU"}
                        title={"MacBook"}
                        rating={true}
                        price={"9,000"}
                    />
                    
              </div>
            </div>

          </div>

        </div>  
      </div>

    );
  }
  
  export default Productbody;