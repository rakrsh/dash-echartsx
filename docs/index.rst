Dash EChartsX
=============

Build interactive Apache ECharts visualizations in Plotly Dash with a responsive
React component and a Python-first API.

.. toctree::
   :maxdepth: 2
   :caption: Guide

   guide
   playground

.. toctree::
   :maxdepth: 2
   :caption: Reference

   reference/python_api
   reference/typescript_props

Quick start
-----------

Install the package and place a chart in a Dash layout:

.. code-block:: console

   pip install dash-echartsx

.. code-block:: python

   from dash import Dash
   from dash_echartsx import DashEChartsX

   app = Dash(__name__)
   app.layout = DashEChartsX(
       option={
           "xAxis": {"type": "category", "data": ["A", "B", "C"]},
           "yAxis": {"type": "value"},
           "series": [{"type": "bar", "data": [12, 20, 8]}],
       }
   )

.. note::

   The component fills its parent. Give the parent a responsive width and height,
   or pass a ``style`` mapping to control the chart container.
