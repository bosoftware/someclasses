const CustomMenu = () => {
  const [checkedKeys, setCheckedKeys] = useState([]);

  const handleCheck = (key, checked) => {
    let newCheckedKeys = [...checkedKeys];
    const item = items.find((item) => item.key === key);

    if (item.children && item.children.length > 0) {
      // If the item has children, select/deselect all children
      const childKeys = item.children.map((child) => child.key);
      if (checked) {
        newCheckedKeys = [...newCheckedKeys, ...childKeys];
      } else {
        newCheckedKeys = newCheckedKeys.filter((k) => !childKeys.includes(k));
      }
    }

    if (checked) {
      newCheckedKeys.push(key);
    } else {
      newCheckedKeys = newCheckedKeys.filter((k) => k !== key);
    }

    setCheckedKeys(newCheckedKeys);
  };

  return (
    <Menu
      mode="inline"
      style={{ width: 256 }}
      items={items.map((item) => ({
        label: (
          <Checkbox
            checked={checkedKeys.includes(item.key)}
            onChange={(e) => handleCheck(item.key, e.target.checked)}
          >
            {item.label}
          </Checkbox>
        ),
        key: item.key,
        children: item.children.map((child) => ({
          label: (
            <Checkbox
              checked={checkedKeys.includes(child.key)}
              onChange={(e) => handleCheck(child.key, e.target.checked)}
            >
              {child.label}
            </Checkbox>
          ),
          key: child.key,
        })),
      }))}
    />
  );
};
