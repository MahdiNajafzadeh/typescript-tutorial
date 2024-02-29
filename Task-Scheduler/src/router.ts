import { Router } from "express"
import { readdirSync, statSync } from "fs"
import path from "path"

function scanRouteDir(routeDirPath: string): Router[] {
	const allImportedRoutes: Router[] = []

	function scanDir(dirPath: string) {
		const files = readdirSync(dirPath)
		files.forEach((file) => {
			const filePath = path.join(dirPath, file)
			const fileStat = statSync(filePath)
			if (fileStat.isDirectory()) {
				scanDir(filePath)
			} else if (
				fileStat.isFile() &&
				/routes.[js-ts]/.test(path.basename(filePath))
			) {
				try {
					const routes = require(filePath).default
					allImportedRoutes.push(routes)
				} catch (error: any) {
					console.log(error)
				}
			}
		})
	}

	scanDir(routeDirPath)
	return allImportedRoutes
}

const routes = scanRouteDir(path.join(__dirname, "./routes"))

export default routes
