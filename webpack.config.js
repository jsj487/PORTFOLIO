const path = require("path");

module.exports = {
  entry: "./src/index.js", // 엔트리 포인트 설정
  output: {
    filename: "bundle.js", // 출력 파일 이름
    path: path.resolve(__dirname, "dist"), // 출력 경로
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 절대 경로 설정
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 모든 .js 파일에 대해 Babel 로더를 사용
        exclude: /node_modules/, // node_modules 디렉토리는 제외
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // CSS 파일 처리
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/, // 폰트 파일 처리
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/", // 출력 폴더
              publicPath: "/fonts/", // 웹에서 접근하는 경로
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // 이미지 파일 처리
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/", // 출력 폴더
              publicPath: "/img/", // 웹에서 접근하는 경로
            },
          },
        ],
      },
    ],
  },
};
