import dbConnect from "../../lib/dbConnect";
import Favorite from '../../model/ItemFavorite';

export default async function handler(req, res) {
  const { method } = req; // 클라이언트 Method

  //db연결
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const favorite = await Favorite.find({})
        res.status(200).json({ success: '장바구니 데이터 불러오기 성공', data: favorite })
      } catch (error) {
        res.status(400).json({ success: '장바구니 GET실패입니다' })
      }
      break

      case 'POST':
      try {
        const favorite = await Favorite.create(req.body)
        res.status(201).json({ success: '장바구니 데이터 저장 성공', data: favorite })
      } catch (error) {
        res.status(400).json({ success: '장바구니 POST실패입니다' })
      }
      break

      case 'PUT':
      try {
        const favorite = await Favorite.updateOne({widgetId : req.body.widgetId}, req.body)
        res.status(201).json({ success: '장바구니 데이터 업데이트 성공', data: favorite })
      } catch (error) {
        res.status(400).json({ success: '장바구니 업데이트 실패' })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
