可以針對內容進行展開或隱藏

## 介面設計

### Accordion

|          | description    | type                  | default |
| -------- | -------------- | --------------------- | ------- |
| onChange | 切換面板的回調 | (index:number) ⇒ void | -       |
|          |                |                       |         |

### Accordion.Panel

|          | description | type         | default |
| -------- | ----------- | ------------ | ------- |
| header   | 面板的標題  | ReactElement | -       |
| children | 面板的內容  | ReactElement | -       |

## 使用方法

```jsx
<Accordion onChange={(value) => console.log("value ", value)}>
  {dummyDataSource.map((item, index) => (
    <Accordion.Panel header={<div>header</div>} key={index}>
      <div>TBD</div>
    </Accordion.Panel>
  ))}
</Accordion>
```

將內容整理成一個陣列，經過迭代的方式渲染面板。

**`Accordion.Panel`** 需要分別傳入面板的標題和內容。

## Accordion 結構

```jsx
function Accordion () {
	return (
		{React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        onClick: () => onChange && onChange(index),
      })
    )}
	)
}
```

針對傳進來的 `child`, 添加 `onClick` 屬性，讓用戶可以拿到當下點擊的 `Panel Index` 。

## Accordion.Panel 結構

```jsx
function Panel() {
  return (
    <Wrapper
      //@ts-ignore
      onClick={props.onClick}
    >
      <Header isUp={display === "block"} onClick={() => handlePanelClick()}>
        {header}
      </Header>
      <PanelAnimation
        ref={panelRef}
        maxHeight={display === "block" ? scrollHeight : 0}
      >
        <div>{children}</div>
      </PanelAnimation>
    </Wrapper>
  );
}
```

**header** —> 外部傳入的面板標題

**children** —> 外部傳入的面板內容

展開內容時，面板的高度是通過 **panelRef** 的 **scrollHeight** 取得。
