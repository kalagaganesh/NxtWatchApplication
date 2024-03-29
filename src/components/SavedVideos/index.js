import {Component} from 'react'

import Cookies from 'js-cookie'

import {Link, Redirect} from 'react-router-dom'

import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import VideosContext from '../../context/VideosContext'

import Header from '../Header'

import {
  EachSelectContainer,
  DisplayText,
  SelectOneItemContainer,
  SelectContainer,
  LogoContainer,
  Logo,
  ContactContainer,
  ContactText,
  HomeMainContainer,
  TrendingMainContainer,
  GamingHeader,
  GamingLogo,
  GamingText,
  TrendingVideoContainer,
  EachTrendingVideoContainer,
  TrendingDetailsContainer,
  TrendingName,
  TrendingTitle,
  TrendingCountContainer,
  TrendingSpanEle,
  TrendingThumbnailImage,
  NoVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosPara,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <VideosContext.Consumer>
        {value => {
          const {activeTabId, savedVideosList, changeTabId, isDarkTheme} = value
          const onChangeHomeTabId = () => {
            changeTabId('Home')
          }
          const onChangeTrendingTabId = () => {
            changeTabId('Trending')
          }
          const onChangeGamingTabId = () => {
            changeTabId('Gaming')
          }
          const onChangeSavedVideosTabId = () => {
            changeTabId('SavedVideos')
          }
          const iconBgColor = activeTabId === 'SavedVideos' ? '#ff0b37' : ''
          const navigationBgColor = isDarkTheme ? '#424242' : ''
          const navigationTextColor = isDarkTheme ? '#ffffff' : '#424242'
          const changeHeading = isDarkTheme ? '#ffffff' : '#1e293b'
          const changeBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const changeHeaderColor = isDarkTheme ? '#181818' : '#e2e8f0'

          return (
            <>
              <Header />
              <HomeMainContainer>
                <SelectContainer bgColor={navigationBgColor}>
                  <SelectOneItemContainer>
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <EachSelectContainer onClick={onChangeHomeTabId}>
                        <IoMdHome />
                        <DisplayText color={navigationTextColor}>
                          Home
                        </DisplayText>
                      </EachSelectContainer>
                    </Link>
                    <Link to="/trending" style={{textDecoration: 'none'}}>
                      <EachSelectContainer onClick={onChangeTrendingTabId}>
                        <HiFire />
                        <DisplayText color={navigationTextColor}>
                          Trending
                        </DisplayText>
                      </EachSelectContainer>
                    </Link>
                    <Link to="/gaming" style={{textDecoration: 'none'}}>
                      <EachSelectContainer onClick={onChangeGamingTabId}>
                        <SiYoutubegaming />
                        <DisplayText color={navigationTextColor}>
                          Gaming
                        </DisplayText>
                      </EachSelectContainer>
                    </Link>
                    <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                      <EachSelectContainer onClick={onChangeSavedVideosTabId}>
                        <BiListPlus color={iconBgColor} />
                        <DisplayText color={navigationTextColor}>
                          Saved Videos
                        </DisplayText>
                      </EachSelectContainer>
                    </Link>
                  </SelectOneItemContainer>
                  <ContactContainer>
                    <ContactText color={navigationTextColor}>
                      CONTACT US
                    </ContactText>
                    <LogoContainer>
                      <Logo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <Logo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <Logo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </LogoContainer>
                    <ContactText color={navigationTextColor}>
                      Enjoy! Now to see your channels and recommendations!
                    </ContactText>
                  </ContactContainer>
                </SelectContainer>
                {savedVideosList.length === 0 ? (
                  <NoVideosContainer
                    bgColor={changeBgColor}
                    data-testid="savedVideos"
                  >
                    <NoSavedVideosImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoSavedVideosHeading color={changeHeading}>
                      No Saved Videos found
                    </NoSavedVideosHeading>
                    <NoSavedVideosPara>
                      You can save your videos while watching them
                    </NoSavedVideosPara>
                  </NoVideosContainer>
                ) : (
                  <TrendingMainContainer data-testid="savedVideos">
                    <GamingHeader bgColor={changeHeaderColor}>
                      <GamingLogo>
                        <HiFire />
                      </GamingLogo>
                      <GamingText color={navigationTextColor}>
                        Saved Videos
                      </GamingText>
                    </GamingHeader>
                    <TrendingVideoContainer
                      bgColor={changeBgColor}
                      data-testid="savedVideos"
                    >
                      {savedVideosList.map(eachItem => (
                        <Link
                          style={{textDecoration: 'none'}}
                          to={`/videos/${eachItem.id}`}
                          key={eachItem.id}
                        >
                          <EachTrendingVideoContainer key={eachItem.id}>
                            <TrendingThumbnailImage
                              alt="trending"
                              src={eachItem.thumbnailUrl}
                            />
                            <TrendingDetailsContainer>
                              <TrendingTitle color={changeHeading}>
                                {eachItem.title}
                              </TrendingTitle>
                              <TrendingName color={changeHeading}>
                                {eachItem.name}
                              </TrendingName>
                              <TrendingCountContainer color={changeHeading}>
                                {eachItem.viewCount} views{' '}
                                <TrendingSpanEle>
                                  {eachItem.publishedAt}
                                </TrendingSpanEle>
                              </TrendingCountContainer>
                            </TrendingDetailsContainer>
                          </EachTrendingVideoContainer>
                        </Link>
                      ))}
                    </TrendingVideoContainer>
                  </TrendingMainContainer>
                )}
              </HomeMainContainer>
            </>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}

export default SavedVideos
