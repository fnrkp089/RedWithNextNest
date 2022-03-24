import {MiddleContainer, Wrapper, SearchCotainer, SellingState,
  NowSelling,
  ListWrapper, ListScrollBar, ListItemWrapper, ListItemInnerWrapper, ListItemdiv, ListImg,
  ListContextContainer, 
  ItemInformation, ItemHeader, ItemExplain, ItemTag, ItemFooterContainer,
  ItemSellerImgTextContainer, ItemSellerImgContainer, ItemSellerImg, ItemSeller, 
  ItemRemarkImgTextContainer, ItemRemarkImgContainer, ItemRemarkImg, ItemRemark,
  PriceContainer, PriceImgContainer, PriceImg, PriceText, WriteDiv, WriterButton
 }from './CustomFavorite.styled';

  export default function CustomFavoriteUI () {
    return(
      <MiddleContainer>
        <Wrapper>
          <SearchCotainer>
            <SellingState>
              <NowSelling>
                장바구니에 담은 상품
              </NowSelling>
             
            </SellingState>
          </SearchCotainer>

          <ListScrollBar >
            <ListWrapper >
              {/* {data.fetchUseditems.map((list) => (
                <ListItemWrapper onClick={routeToInfo(list._id)} key={list._id}>
                <ListItemInnerWrapper>
                  <ListItemdiv>
                    <ListImg/>
                  </ListItemdiv>
                  <ListContextContainer>
                    <ItemInformation>
                      <ItemHeader  >{list.name}</ItemHeader>
                      <ItemExplain dangerouslySetInnerHTML={ {__html: list.contents} }/>
                      <ItemTag>{list.tags}</ItemTag>
                    </ItemInformation>
                    <ItemFooterContainer>

                      <ItemSellerImgTextContainer>
                      <ItemSellerImgContainer>
                        <ItemSellerImg src='/guest.png'/>
                      </ItemSellerImgContainer>
                      <ItemSeller>{list.seller.name}</ItemSeller>
                      </ItemSellerImgTextContainer>

                      <ItemRemarkImgTextContainer>
                        <ItemRemarkImgContainer>
                          <ItemRemarkImg src='/yellowHeart.png'/>
                        </ItemRemarkImgContainer>
                        <ItemRemark>{list.remarks}</ItemRemark>
                      </ItemRemarkImgTextContainer>
                    </ItemFooterContainer>
                  </ListContextContainer>

                  <PriceContainer>
                        <PriceImgContainer>
                          <PriceImg src='/price.png'/>
                        </PriceImgContainer>
                        <PriceText>
                          {list.price}
                        </PriceText>
                  </PriceContainer>
                </ListItemInnerWrapper >
              </ListItemWrapper>
              ))} */}
            </ListWrapper>
          </ListScrollBar>
          <WriteDiv>
            <WriterButton>주문하기</WriterButton>
          </WriteDiv>
        </Wrapper>
      </MiddleContainer>
    )
  }