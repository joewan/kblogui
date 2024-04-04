import { useParams } from "react-router-dom";

function TestView() {
    // 获取参数
    const params = useParams()
    return <div><h1>TestView-[{params.id}]</h1></div>
}

export default TestView;