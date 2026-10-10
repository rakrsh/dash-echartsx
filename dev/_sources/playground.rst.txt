Live option playground
======================

Edit an ECharts option and see the ``DashEChartsX`` React component update in
the preview. The editor runs entirely in your browser; it does not send option
data to a server.

.. raw:: html

   <div class="playground-controls">
     <label for="option-example">Example</label>
     <select id="option-example">
       <option value="bar">Bar chart</option>
       <option value="line">Line chart</option>
       <option value="scatter">Scatter plot</option>
     </select>
     <button id="apply-option" type="button">Apply option</button>
     <span id="playground-status" role="status" aria-live="polite"></span>
   </div>
   <div class="playground-grid">
     <div id="option-editor" class="playground-editor" aria-label="ECharts option editor"></div>
     <div class="playground-preview" aria-label="Dash EChartsX preview">
       <div id="chart-root"></div>
     </div>
   </div>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.6/ace.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
   <script src="_static/generated/dash_echartsx.umd.js"></script>
   <script src="_static/playground.js"></script>

The playground accepts JSON options. Python-side helpers and JavaScript
formatter markers are documented in the :doc:`guide`.

.. warning::

   ECharts options containing a ``__js_eval__`` marker compile and execute the
   marked JavaScript in your browser. Only use code that you trust.
