import Project from '../models/Project.js';
import mongoose from 'mongoose';

export const getProjects = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const projects = await Project.find().sort('order');
      res.json(projects);
    } else {
      res.json([]);
    }
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const project = await Project.findById(req.params.id);
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } else {
      res.status(404).json({ message: 'Project not found (No DB)' });
    }
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const project = new Project(req.body);
      const createdProject = await project.save();
      res.status(201).json(createdProject);
    } else {
      res.status(201).json({ ...req.body, _id: 'mock-id' });
    }
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } else {
      res.json({ ...req.body, _id: req.params.id });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (project) {
        res.json({ message: 'Project removed' });
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } else {
      res.json({ message: 'Project removed (Mock DB)' });
    }
  } catch (error) {
    next(error);
  }
};
