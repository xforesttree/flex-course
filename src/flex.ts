import styled from "@emotion/styled";

const column = `
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-box-direction: normal;
    -moz-box-orient: vertical;
    flex-direction: column;
`;
const FlexColumn = styled.div`
  ${column}
`;
const FlexColumnCenter = styled.div`
  ${column}
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;
const FlexColumnEnd = styled.div`
  ${column}
  -webkit-box-align: end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;
const FlexColumnStart = styled.div`
  ${column}
  -webkit-box-align: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

const FlexColumnBetween = styled.div`
  ${column}
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const FlexColumnAround = styled.div`
  ${column}
  -ms-flex-pack: distribute;
  -webkit-box-pack: space-around;
  -moz-box-pack: space-around;
  justify-content: space-around;
`;

const columnReverse = `
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: reverse;
    -webkit-box-orient: vertical;
    -moz-box-direction: reverse;
    -moz-box-orient: vertical;
    flex-direction: column-reverse;
`;

const FlexColumnReverse = styled.div`
  ${columnReverse}
`;
const FlexColumnReverseCenter = styled.div`
  ${columnReverse}
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;
const FlexColumnReverseEnd = styled.div`
  ${columnReverse}
  -webkit-box-align: end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;
const FlexColumnReverseStart = styled.div`
  ${columnReverse}
  -webkit-box-align: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

const row = `
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -moz-box-direction: normal;
    -moz-box-orient: horizontal;
    flex-direction: row;
`;

const FlexRow = styled.div`
  ${row}
`;
const FlexRowCenter = styled.div`
  ${row}
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;
const FlexRowEnd = styled.div`
  ${row}
  -webkit-box-align: end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;
const FlexRowStart = styled.div`
  ${row}
  -webkit-box-align: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

const FlexRowBetween = styled.div`
  ${row}
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const FlexRowAround = styled.div`
  ${row}
  -ms-flex-pack: distribute;
  -webkit-box-pack: space-around;
  -moz-box-pack: space-around;
  justify-content: space-around;
`;

const rowReverse = `
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: reverse;
    -webkit-box-orient: horizontal;
    -moz-box-direction: reverse;
    -moz-box-orient: horizontal;
    flex-direction: row-reverse;
`;

const FlexRowReverse = styled.div`
  ${rowReverse}
`;
const FlexRowReverseCenter = styled.div`
  ${rowReverse}
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;
const FlexRowReverseEnd = styled.div`
  ${rowReverse}
  -webkit-box-align: end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;
const FlexRowReverseStart = styled.div`
  ${rowReverse}
  -webkit-box-align: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export {
  FlexRow,
  FlexRowAround,
  FlexRowBetween,
  FlexRowStart,
  FlexRowCenter,
  FlexRowEnd,
  FlexRowReverse,
  FlexRowReverseStart,
  FlexRowReverseCenter,
  FlexRowReverseEnd,
  FlexColumn,
  FlexColumnAround,
  FlexColumnBetween,
  FlexColumnStart,
  FlexColumnCenter,
  FlexColumnEnd,
  FlexColumnReverse,
  FlexColumnReverseStart,
  FlexColumnReverseCenter,
  FlexColumnReverseEnd
};
