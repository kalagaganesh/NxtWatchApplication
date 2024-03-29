import styled from 'styled-components'

export const EachSelectContainer = styled.button`
  background: transparent;
  border-style: none;
  display: flex;
  font-size: 20px;
  color: #1e293b;
  cursor: pointer;
  text-decoration: none;
`
export const DisplayText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 2px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const SelectOneItemContainer = styled.ul`
  margin-left: -30px;
`
export const SelectContainer = styled.div`
  width: 250px;
  margin-left: 0px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
export const LogoContainer = styled.div`
  display: flex;
`
export const Logo = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const ContactContainer = styled.div`
  margin-left: 20px;
  margin-top: 300px;
`
export const ContactText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #1e293b;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const HomeMainContainer = styled.div`
  display: flex;
  width: 100%;
`
export const PremiumContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-top: 47px;
`

export const PremiumInnerContainer = styled.div`
  width: 350px;
`

export const WatchLogoImage = styled.img`
  width: 100px;
  height: 25px;
`
export const PrepaidPlanTxt = styled.p`
  color: #1e293b;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 18px;
`
export const PrepaidPlanButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  background-color: transparent;
  border-color: #1e293b;
  height: 30px;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  margin-top: 15px;
`
export const CLoseButton = styled.button`
  background-color: transparent;
  border-style: none;
  font-size: 20px;
  align-self: flex-start;
  cursor: pointer;
`
export const HomeVideosContainer = styled.div`
  width: 100%;
`

export const SearchInput = styled.input`
  width: 280px;
  height: 25px;
  border-style: none;
  border: 1px solid #94a3b8;
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 10px;
  background-color: #ffffff;
  border-right-style: none;
`
export const SearchInputButton = styled.button`
  width: 50px;
  height: 25px;
  border-style: none;
  font-size: 13px;
  color: #64748b;
  font-weight: bold;
  border: 1px solid #94a3b8;
  cursor: pointer;
`
export const HomeVideosMainContainer = styled.div`
  background-color: #f9f9f9;
  height: 100%;
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const ThumbnailImage = styled.img`
  width: 250px;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const AboutProfileContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const Title = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0px;
  font-weight: 500;
`
export const AboutMainContainer = styled.li`
  list-style-type: none;
  width: 250px;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-right: 15px;
`
export const Name = styled.p`
  color: #475569;
  font-family: 'Roboto';
  margin-top: -5px;
  font-size: 15px;
`
export const ViewCountContainer = styled.div`
  margin-top: 0px;
  font-family: 'Roboto';
  color: #475569;
  font-size: 15px;
`
export const ViewCount = styled.p`
  margin-right: 10px;
  display: flex;
`
export const UnorderedListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const SpanEle = styled.span`
  margin-left: 5px;
  display: list-item;
`

export const FailureImage = styled.img`
  width: 400px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`
export const FailureHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 30px;
`

export const FailurePara = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 18px;
`

export const FailureBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #4f46e5;
  border-style: none;
  font-weight: 500;
  width: 100px;
  height: 35px;
  border-radius: 3px;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
