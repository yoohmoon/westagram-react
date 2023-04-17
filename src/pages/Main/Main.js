import React from "react";
import "./Main.css";

function Main() {
  return (
    <>
      <header id="gnb">
        <div>
          <h1 id="logo">
            <a href="#">Westagram</a>
          </h1>
        </div>
        <div className="searchContainer">
          <input type="text" />
          <div className="searchWrapper">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>검색</span>
          </div>
        </div>
        <nav className="navIconsContainer">
          <a href="#">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="navigation icon"
              width="25px"
            />
          </a>
          <a href="">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart icon"
              width="25px"
            />
          </a>
          <a href="">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="user profile icon"
              width="25px"
            />
          </a>
        </nav>
      </header>
      <main>
        <div className="mainLeftColumnWrap">
          <div className="storiesContainer">
            <ul>
              <li>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="story poster profile pic"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
              <li>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="story poster profile pic"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
              <li>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="story poster profile pic"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
              <li>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="story poster profile pic"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
              <li>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="story poster profile pic"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
            </ul>
          </div>
          <section className="postsContainer">
            <article>
              <div className="postHeader">
                <div className="posterInfoWrapper">
                  <img
                    src="/images/profile_photo.jpg"
                    alt="user profile photo"
                    className="profileImg"
                  />
                  <h2>software_engineer_wannabe</h2>
                  <div className="createdAt">
                    <span className="dot"></span>4일
                    <span className="dot"></span>
                  </div>
                </div>
                <div className="moreOptionsWrapper">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="postedImg">
                <img src="/images/post_dog_photo.jpg" alt="cute doggie pic" />
              </div>
              <div class="postContentContainer">
                <div class="interactionIconsWrapper">
                  <div class="leftIcons">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment fa-flip-horizontal"></i>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                  <i class="fa-regular fa-bookmark"></i>
                </div>
                <div class="likedUsers">
                  <img
                    src="https://images.unsplash.com/photo-1620194544222-8c956ca15f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                    alt="user profile image"
                    class="profileImg"
                  />
                  <p>
                    <span class="bold">wework</span>님
                    <span class="bold">외 213명</span>이 좋아합니다
                  </p>
                </div>
                <div class="postContent">
                  <div class="postContentWrapper">
                    <span class="posterName bold">
                      software_engineer_wannabe
                    </span>
                    <p>
                      오늘도 감사한 하루💖<span>...</span>
                    </p>
                  </div>
                  <p class="moreContent more">더 보기</p>
                </div>
              </div>
              <div class="commentsList">
                <div id="uploadedCommentsBox">
                  <p class="more">댓글 3개 모두 보기</p>
                </div>
                <form class="submitReply" action="">
                  <input
                    class="inputReply"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button type="submit" class="submit bold debuttonize">
                    게시
                  </button>
                </form>
              </div>
            </article>
          </section>
        </div>
        <aside>
          <div class="currentUserInfoContainer">
            <img
              src="/images/profile_photo.jpg"
              alt="user profile photo"
              class="profileImg"
            />
            <div>
              <p>software_engineer_wannabe</p>
              <p>S.E. based in Aus | from S.Korea</p>
            </div>
          </div>
          <div class="recommendedUserList">
            <div>
              <h3 class="bold">회원님을 위한 추천</h3>
              <span class="bold">모두 보기</span>
            </div>
            <ul>
              <li>
                <div class="userInfoWrapper">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="first recommended user profile pic"
                    class="profileImg"
                  />
                  <div>
                    <h4 class="bold">tellmemoreaboutu</h4>
                    <p>회원님이 팔로우합니다</p>
                  </div>
                </div>
                <button class="debuttonize">팔로우</button>
              </li>

              <li>
                <div class="userInfoWrapper">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="first recommended user profile pic"
                    class="profileImg"
                  />
                  <div>
                    <h4 class="bold">tellmemoreaboutu</h4>
                    <p>회원님이 팔로우합니다</p>
                  </div>
                </div>
                <button class="debuttonize">팔로우</button>
              </li>
              <li>
                <div class="userInfoWrapper">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="first recommended user profile pic"
                    class="profileImg"
                  />
                  <div>
                    <h4 class="bold">tellmemoreaboutu</h4>
                    <p>회원님이 팔로우합니다</p>
                  </div>
                </div>
                <button class="debuttonize">팔로우</button>
              </li>
            </ul>
          </div>
          <footer>
            <ul>
              <li>
                <a href="#">소개&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">도움말&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">홍보 센터&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">API&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">채용 정보&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">개인정보처리방침&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">약관&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">위치&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">언어&nbsp;&#183;&nbsp;</a>
              </li>
              <li>
                <a href="#">Meta Verified</a>
              </li>
            </ul>
            <p>&copy; 2023 INSTAGRAM FROM META</p>
          </footer>
        </aside>
      </main>
    </>
  );
}

export default Main;
