import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from attached_assets directory
  app.use('/attached_assets', express.static(path.resolve(process.cwd(), 'attached_assets')));

  const httpServer = createServer(app);

  return httpServer;
}
