import {MiddleContainer, Wrapper, SearchCotainer, SellingState,
  NowSelling,
  ListWrapper, ListScrollBar, ListItemWrapper, ListItemInnerWrapper, ListItemdiv, ListImg,
  ListContextContainer, 
  ItemInformation, ItemHeader, ItemExplain, ItemTag, Select, ItemFooterContainer,
  ItemSellerImgTextContainer, ItemSellerImgContainer, ItemSellerImg, ItemSeller, 
  ItemRemarkImgTextContainer, ItemRemarkImgContainer, ItemRemarkImg, ItemRemark,
  PriceContainer, PriceImgContainer, PriceImg, PriceText, WriteDiv, WriterButton
 }from './CustomFavorite.styled';

  export default function CustomFavoriteUI ({favoriteData, total, handleOrderChange}) {
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
            <ListWrapper>
              {favoriteData.data?.map((list) => (
                <ListItemWrapper key={list.widgetId} >
                <ListItemInnerWrapper>
                  <ListItemdiv>
                    <ListImg/>
                  </ListItemdiv>
                  <ListContextContainer>
                    <ItemInformation>
                      <ItemHeader>{list.productInfo.name}</ItemHeader>
                      <ItemExplain>사이즈 :{list.summary.sizes.value}</ItemExplain>
                      <ItemTag>수량: 
                        <select defaultValue={list.printAmount.value} onChange={handleOrderChange} id={list.widgetId}>
                          {list.productInfo.options.printAmount.valueInfo.values.map(list => (
                            <option value={list}>{list}</option>
                          ))}
                        </select> 
                        </ItemTag>
                      
                    </ItemInformation>
                    <ItemFooterContainer>

                      <ItemSellerImgTextContainer>
                      <ItemSellerImgContainer>
                       
                      </ItemSellerImgContainer>
                      <ItemSeller>자재: {list.summary.materials.value}</ItemSeller>
                      </ItemSellerImgTextContainer>

                      <ItemRemarkImgTextContainer>
                        <ItemRemarkImgContainer>
                        
                        </ItemRemarkImgContainer>
                        <ItemRemark>수량 : {list.summary.printAmount.value}</ItemRemark>
                      </ItemRemarkImgTextContainer>
                    </ItemFooterContainer>
                  </ListContextContainer>

                  <PriceContainer>
                        <PriceImgContainer>
                         
                        </PriceImgContainer>
                        <PriceText>
                          {list.priceInfo.total}
                        </PriceText>
                  </PriceContainer>
                </ListItemInnerWrapper >
              </ListItemWrapper>
              ))}
            </ListWrapper>
          </ListScrollBar>
          <WriteDiv>
            <PriceText>총 금액: {total}</PriceText>
            <WriterButton>주문하기</WriterButton>
          </WriteDiv>
          <div id='red-platform-area'></div>
        </Wrapper>
      </MiddleContainer>
    )
  }