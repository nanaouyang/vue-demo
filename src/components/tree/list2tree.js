export function list2tree(
  list,
  { id = "id", pid = "pid", children = "children" } = {}
) {
  return list.reduce((prev, curr) => {
    const obj = list.find((item) => item[id] === curr[pid]); // 根据当前项找出父节点
    if (obj) {
      // 存在父节点
      // eslint-disable-next-line no-prototype-builtins
      !obj.hasOwnProperty([children]) && (obj[children] = []); // 父节点无[children]属性，初始化[children]
      obj[children].push(curr); // 把当前节点推进父节点[children]
    } else {
      prev.push(curr);
    }
    return prev;
  }, []);
}
