import React from "react";
import styled from "@emotion/styled";
import {
  FlexRow,
  FlexColumn,
  FlexRowCenter,
  FlexRowAround,
  FlexColumnBetween,
  FlexRowBetween,
} from "../flex";

const StyledHeaderImage = styled.img`
  width: 100%;
  height: 450px;
`;

const StyledBoxedImage = styled.img`
  width: 150px;
  height: 150px;
`;

const StyledNavbar = styled.nav`
  background: #2caffc;
  padding: 4px;
`;

const StyledLink = styled.a`
  color: white;
`;

const StyledArticle = styled.article`
  min-width: 1000px;
`;

const StyledHeading = styled.h1`
  color: #2caffc;
`;

function App() {
  return (
    <React.Fragment>
      <header>
        <StyledHeaderImage src="https://www.aspca.org/sites/default/files/blog_foster-myth_062718_main.jpg" />
      </header>
      <StyledNavbar>
        <FlexRowAround>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/">Kittens</StyledLink>
          <StyledLink href="/">Doggos</StyledLink>
          <StyledLink href="/goal">Goal</StyledLink>
        </FlexRowAround>
      </StyledNavbar>
      <FlexRow>
        <FlexColumn>
          <StyledArticle>
            <StyledHeading>Shypple</StyledHeading>
            <StyledHeaderImage src="https://pbs.twimg.com/media/D6oIl-7W4AEvAL9.jpg" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ac
            feugiat augue, non fringilla lacus.Morbi mollis mi in ante mollis
            mattis.Vestibulum accumsan, erat at ultricies venenatis, odio nisl
            sodales tortor, vulputate pretium nibh libero at magna.Quisque
            mattis vehicula arcu quis gravida.Integer feugiat mi id leo mattis
            luctus.Morbi eget dui justo.Sed eros turpis, laoreet sed sapien ac,
            lobortis consectetur quam.Phasellus at urna aliquam, accumsan mi
            auctor, faucibus ligula. Etiam tempus nisi in velit pretium
            tristique.In eu lacus ac nisl semper hendrerit.Aliquam arcu orci,
            laoreet a dictum id, luctus congue erat.Morbi mollis, mauris posuere
            sagittis eleifend, turpis mauris rhoncus nisi, quis congue turpis
            nibh sed metus.Duis nec ex mollis, interdum urna eu, sollicitudin
            tortor.Proin mattis hendrerit velit, at aliquam mauris imperdiet
            eu.Aliquam augue sapien, blandit eu imperdiet eget, euismod in
            tellus.Morbi luctus dictum augue, id iaculis metus finibus
            eu.Aliquam auctor facilisis ipsum, a fringilla sem euismod ut.Fusce
            vel ullamcorper risus. Nullam maximus metus vel mattis posuere.Donec
            ullamcorper dui eget pulvinar pellentesque.Morbi posuere sodales
            tellus tincidunt dignissim.Maecenas convallis ultricies ligula, ac
            pellentesque elit fermentum eu.Duis dapibus a ipsum sit amet
            cursus.Pellentesque sed congue nisl.Vivamus tristique blandit ex non
            aliquam.Maecenas pellentesque orci augue, et sodales tortor rhoncus
            a.Donec ullamcorper enim turpis, eget dictum augue malesuada
            ut.Donec et justo faucibus, congue ligula fringilla, scelerisque
            mauris.Nullam quis risus malesuada, facilisis justo consectetur,
            rutrum tellus. Vestibulum vulputate sem quam, sit amet ornare ex
            sagittis ut.Suspendisse nec nulla sit amet justo euismod maximus nec
            nec velit.Aenean vitae condimentum magna.Proin tristique erat in
            turpis ornare dictum.Cras consequat magna a interdum rhoncus.Nam
            mollis risus nec dui egestas, ut maximus nibh imperdiet.Integer sed
            purus quam.Vestibulum viverra, nibh in lacinia dapibus, ante turpis
            rhoncus massa, non tempus dolor velit eget eros.Praesent velit
            mauris, malesuada a pulvinar eget, posuere in sapien.Sed malesuada
            laoreet libero, vitae vulputate purus sagittis ut.Praesent
            condimentum neque vitae dolor mollis commodo. Phasellus pellentesque
            felis quam, ut placerat justo semper et.Etiam molestie odio risus,
            ac vestibulum metus congue non.Aenean porttitor nulla in blandit
            sodales.Aliquam ornare gravida est et lobortis.Aliquam id faucibus
            odio.Mauris vestibulum, massa vel volutpat luctus, ipsum lacus
            tristique eros, ut feugiat erat quam quis quam.Integer id urna nec
            est volutpat hendrerit eu sed leo.Proin feugiat dolor ut est
            imperdiet, vestibulum semper justo tristique.Aliquam non dictum
            lorem, ut hendrerit elit.Pellentesque ac cursus tellus.
          </StyledArticle>
          <StyledArticle>
            <StyledHeading>Shypple expert</StyledHeading>
            <FlexRow>
              <FlexColumn>
                <FlexRow>
                  <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                  <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                  <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                </FlexRow>
                <FlexRowBetween>
                  <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                  <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                </FlexRowBetween>
                <FlexRow>
                  <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                  <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                </FlexRow>
                <FlexRowBetween>
                  <FlexColumn>
                    <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                    <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                  </FlexColumn>

                  <FlexColumn>
                    <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                    <StyledBoxedImage src="https://jobsforthem.s3.eu-west-1.amazonaws.com/63b6cc8cccbe9495a9fcf068b7dda300.jpg" />
                  </FlexColumn>
                </FlexRowBetween>
              </FlexColumn>
              <FlexColumnBetween>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras
                  ac feugiat augue, non fringilla lacus.Morbi mollis mi in ante
                  mollis mattis.Vestibulum accumsan, erat at ultricies
                  venenatis, odio nisl sodales tortor, vulputate pretium nibh
                  libero at magna.Quisque mattis vehicula arcu quis
                  gravida.Integer feugiat mi id leo mattis luctus.Morbi eget dui
                  justo.Sed eros turpis, laoreet sed sapien ac, lobortis
                  consectetur quam.Phasellus at urna aliquam, accumsan mi
                  auctor, faucibus ligula. Etiam tempus nisi in velit pretium
                  tristique.In eu lacus ac nisl semper hendrerit.Aliquam arcu
                  orci, laoreet a dictum id, luctus congue erat.Morbi mollis,
                  mauris posuere sagittis eleifend, turpis mauris rhoncus nisi,
                  quis congue turpis nibh sed metus.Duis nec ex mollis, interdum
                  urna eu, sollicitudin tortor.Proin mattis hendrerit velit, at
                  aliquam mauris imperdiet eu.Aliquam augue sapien, blandit eu
                  imperdiet eget, euismod in tellus.Morbi luctus dictum augue,
                  id iaculis metus finibus eu.Aliquam auctor facilisis ipsum, a
                  fringilla sem euismod ut.Fusce vel ullamcorper risus. Nullam
                  maximus metus vel mattis posuere.Donec ullamcorper dui eget
                  pulvinar pellentesque.Morbi posuere sodales tellus tincidunt
                  dignissim.Maecenas convallis ultricies ligula, ac pellentesque
                  elit fermentum eu.Duis dapibus a ipsum sit amet
                  cursus.Pellentesque sed congue nisl.Vivamus tristique blandit
                  ex non aliquam.Maecenas pellentesque orci augue, et sodales
                  tortor rhoncus a.Donec ullamcorper enim turpis, eget dictum
                  augue malesuada ut.Donec et justo faucibus, congue ligula
                  fringilla, scelerisque mauris.Nullam quis risus malesuada,
                  facilisis justo consectetur, rutrum tellus. Vestibulum
                  vulputate sem quam, sit amet ornare ex sagittis ut.Suspendisse
                  nec nulla sit amet justo euismod maximus nec nec velit.Aenean
                  vitae condimentum magna.Proin tristique erat in turpis ornare
                  dictum.Cras consequat magna a interdum rhoncus.Nam mollis
                  risus nec dui egestas, ut maximus nibh imperdiet.Integer sed
                  purus quam.Vestibulum viverra, nibh in lacinia dapibus, ante
                  turpis rhoncus massa, non tempus dolor velit eget eros.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras
                  ac feugiat augue, non fringilla lacus.Morbi mollis mi in ante
                  mollis mattis.Vestibulum accumsan, erat at ultricies
                  venenatis, odio nisl sodales tortor, vulputate pretium nibh
                  libero at magna.Quisque mattis vehicula arcu quis
                  gravida.Integer feugiat mi id leo mattis luctus.Morbi eget dui
                  justo.Sed eros turpis, laoreet sed sapien ac, lobortis
                  consectetur quam.Phasellus at urna aliquam, accumsan mi
                  auctor, faucibus ligula. Etiam tempus nisi in velit pretium
                  tristique.In eu lacus ac nisl semper hendrerit.Aliquam arcu
                  orci, laoreet a dictum id, luctus congue erat.Morbi mollis,
                  mauris posuere sagittis eleifend, turpis mauris rhoncus nisi,
                  quis congue turpis nibh sed metus.Duis nec ex mollis, interdum
                  urna eu, sollicitudin tortor.Proin mattis hendrerit velit, at
                  aliquam mauris imperdiet eu.Aliquam augue sapien, blandit eu
                  imperdiet eget, euismod in tellus.Morbi luctus dictum augue,
                  id iaculis metus finibus eu.Aliquam auctor facilisis ipsum, a
                  fringilla sem euismod ut.Fusce vel ullamcorper risus. Nullam
                  maximus metus vel mattis posuere.Donec ullamcorper dui eget
                  pulvinar pellentesque.Morbi posuere sodales tellus tincidunt
                  dignissim.Maecenas convallis ultricies ligula, ac pellentesque
                  elit fermentum eu.Duis dapibus a ipsum sit amet
                  cursus.Pellentesque sed congue nisl.Vivamus tristique blandit
                  ex non aliquam.Maecenas pellentesque orci augue, et sodales
                  tortor rhoncus a.Donec ullamcorper enim turpis, eget dictum
                  augue malesuada ut.Donec et justo faucibus, congue ligula
                  fringilla, scelerisque mauris.Nullam quis risus malesuada,
                  facilisis justo consectetur, rutrum tellus. Vestibulum
                  vulputate sem quam, sit amet ornare ex sagittis ut.Suspendisse
                  nec nulla sit amet justo euismod maximus nec nec velit.Aenean
                  vitae condimentum magna.Proin tristique erat in turpis ornare
                  dictum.Cras consequat magna a interdum rhoncus.Nam mollis
                  risus nec dui egestas, ut maximus nibh imperdiet.Integer sed
                  purus quam.Vestibulum viverra, nibh in lacinia dapibus, ante
                  turpis rhoncus massa, non tempus dolor velit eget eros.
                </p>
              </FlexColumnBetween>
            </FlexRow>
          </StyledArticle>
        </FlexColumn>
        <FlexColumn>
          <StyledHeading>Welkom op mijn Site</StyledHeading>
          <FlexRowCenter>
            <StyledBoxedImage src="https://www.zooplus.nl/magazine/wp-content/uploads/2019/01/geschlecht-bei-kitten-bestimmung-768x512.jpeg" />
            <FlexColumn>
              <StyledBoxedImage src="https://images2.minutemediacdn.com/image/upload/c_crop,h_2276,w_4043,x_0,y_23/f_auto,q_auto,w_1100/v1553128862/shape/mentalfloss/536413-istock-459987119.jpg" />
              <StyledBoxedImage src="https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1" />
            </FlexColumn>
            <StyledBoxedImage src="https://www.aspca.org/sites/default/files/blog_foster-myth_062718_main.jpg" />
          </FlexRowCenter>
        </FlexColumn>
      </FlexRow>
    </React.Fragment>
  );
}

export default App;
