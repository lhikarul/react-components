import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #4c4c57;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 82px;
  position: relative;
  cursor: pointer;
`

export const PanelAnimation = styled.div<{ maxHeight: number }>`
  max-height: ${(props) => props.maxHeight}px;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`
export const ArrowSwitch = styled.span<{ isUp: boolean }>`
  padding-left: 0.5rem;
  min-width: 1.5rem;
  cursor: pointer;
  position: absolute;
  right: 1.8125rem;
  top: 50%;
  transform: translateY(-50%);
  > svg {
    transform: rotate(${(props) => (props.isUp ? '180deg' : '0deg')});
  }
`
