const items = [
  {
    label: 'Parent 1',
    key: 'parent1',
    children: [
      {
        label: 'Child 1',
        key: 'child1',
        children: [
          { label: 'Sub-child 1', key: 'subchild1' },
          { label: 'Sub-child 2', key: 'subchild2' },
        ],
      },
      { label: 'Child 2', key: 'child2' },
    ],
  },
  {
    label: 'Parent 2',
    key: 'parent2',
    children: [
      { label: 'Child 3', key: 'child3' },
      { label: 'Child 4', key: 'child4' },
    ],
  },
];



const getAllKeys = (item) => {
  let keys = [item.key];
  if (item.children) {
    item.children.forEach((child) => {
      keys = [...keys, ...getAllKeys(child)];
    });
  }
  return keys;
};

const handleCheck = (key, checked) => {
  let newCheckedKeys = [...checkedKeys];
  const item = findItemByKey(items, key);

  const allKeys = getAllKeys(item);

  if (checked) {
    newCheckedKeys = [...new Set([...newCheckedKeys, ...allKeys])];
  } else {
    newCheckedKeys = newCheckedKeys.filter((k) => !allKeys.includes(k));
  }

  setCheckedKeys(newCheckedKeys);
};

const findItemByKey = (items, key) => {
  for (let item of items) {
    if (item.key === key) return item;
    if (item.children) {
      const found = findItemByKey(item.children, key);
      if (found) return found;
    }
  }
};


const renderMenuItems = (items) => {
  return items.map((item) => ({
    label: (
      <Checkbox
        checked={checkedKeys.includes(item.key)}
        onChange={(e) => handleCheck(item.key, e.target.checked)}
      >
        {item.label}
      </Checkbox>
    ),
    key: item.key,
    children: item.children ? renderMenuItems(item.children) : null,
  }));
};

const CustomMenu = () => {
  const [checkedKeys, setCheckedKeys] = useState([]);

  return (
    <Menu
      mode="inline"
      style={{ width: 256 }}
      items={renderMenuItems(items)}
    />
  );
};
