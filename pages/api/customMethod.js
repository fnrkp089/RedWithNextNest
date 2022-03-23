import dbConnect from "../../lib/dbConnect";
import Custom from '../../model/CustomItem';

export default async function handler(req, res) {
  const { method } = req; // 클라이언트 Method

  //db연결
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const custom = await Custom.find({})
        res.status(200).json({ success: '데이터 불러오기 성공', data: custom })
      } catch (error) {
        res.status(400).json({ success: 'GET실패입니다' })
      }
      break

    case 'POST':
      try {
        const custom = await Custom.create(req.body)
        res.status(201).json({ success: '데이터 저장 성공', data: custom })
      } catch (error) {
        res.status(400).json({ success: 'POST실패입니다' })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
